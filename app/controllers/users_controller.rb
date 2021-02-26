class UsersController < ApplicationController
  include UsersHelper

  def index
    @users = User.all
    
    render json: @users
  end

  def show
    @user=User.find(params[:id])
    
    render json: { user: @user, token: JsonWebToken.encode(user_id: @user.id) } if @user
  rescue
    render json: { token: "User not found"}
  end

  def create
    @user=User.new(user_params)

    if @user.save
      render json: { user: @user, token: JsonWebToken.encode(user_id: @user.id) }, status: :created, location: @user
    else
      render json: { token: 'User not created'}, status: :unprocessable_entity
    end
  end

  def update
    if check_token(params_with_token[:token])
      @user=User.find(params[:id])
      @user.name=params_with_token[:name]
      @user.email=params_with_token[:email]
      @user.password=params_with_token[:password]

      if @user.save
        render json: @user
      else
        render json: @user.errors
      end
    else
      render json: { token: 'Invalid credentials' }
    end
  end

  def sign_in
    user=User.find_by(email: params[:email])
    
    if user && user.authenticate(params[:password])
      render json: { token: JsonWebToken.encode(user_id: user.id) }
    else
      render json: { token: "Invalid credentials" }
    end
  end

  def check_credentials
    if check_token(params[:token])
      render json: { token: params[:token] } 
    else
      render json: { token: 'Invalid credentials'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def params_with_token
    params.require(:user).permit(:name, :email, :password, :token)
  end
end
