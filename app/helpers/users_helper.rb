module UsersHelper
  def check_token
    true if JsonWebToken.decode(token_params[:token])
    false
  end

  private

  def token_params
    params.require(:user).permit(:token)
  end
end
