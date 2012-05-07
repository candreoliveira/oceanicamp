source 'http://rubygems.org'

gem 'rails', '3.1.3'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

# gem para compilar o javascript
gem 'sprockets'

# gem para compilar templates ejs
gem 'ejs'

# gem para compilar o css
gem 'sass', '3.1.16'

# gem para comprimir o css
gem 'yui-compressor', '0.9.6'

# executa javascript pelo ruby
gem 'execjs', '1.3.1'

# coloca o v8 engine dentro do ruby
gem 'therubyracer', '0.9.9'

# automatizacao de deploy
gem 'capistrano', '2.9.0'

# plugin para fazer upload de arquivos
gem 'carrierwave-mongoid', '0.1.3', :require => 'carrierwave/mongoid'

# plugin de autenticacao
gem 'sorcery', '0.7.0'

# Protege a aplicação contra ataques
gem 'rack-protection', '1.1.4'

# Paginação
gem 'kaminari', '0.13.0'

# banco nosql
gem "mongoid", '2.4.0'

# para deixar o mongodb rapido
gem "bson_ext", '1.5.2'

# biblioteca grafica
gem 'rmagick', :require => 'RMagick'

# pub/sub na web
gem 'faye'

# servidor de desenvolvimento
gem 'thin'

# usado para debugar o rails
gem 'ruby-debug19', :require => 'ruby-debug'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.5'
  gem 'coffee-rails', '~> 3.1.1'
  # gem para comprimir o javascript
	gem 'uglifier', '1.2.0'
end

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

group :test, :development do
  gem 'guard-sprockets2'
  gem 'rb-fsevent'
  gem 'libnotify'
  # Pretty printed test output
  gem 'turn', '0.8.2', :require => false
end
