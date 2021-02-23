namespace :start do
  task :production do
    exec "NPM_CONFIG_PRODUCTION=true npm run postInstall && foreman start"
  end
end