module UsersHelper
  def check_token(token)
    return true unless JsonWebToken.decode(token).nil?
    false
  end
end
