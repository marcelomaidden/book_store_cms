class UsersController < ApplicationController
  include UsersHelper

  before_action :check_token, only: :update
  def index
    @users = User.all
    
    render json: @users
  end

  def create
    @user=User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user=User.update(user_params)
    
    if @user.save
      render json: @user, status: updated, location: @user
    else
      render json: @user.errors
    end
  end

  def sign_in
    user=User.find_by(email: login_params[:email])
    
    if user && user.authenticate(login_params[:password])
      render json: JsonWebToken.encode(user_id: user.id)
    else
      render json: { message: "Invalid credentials" }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
