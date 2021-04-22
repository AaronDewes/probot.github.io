source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(URI.open('https://pages.github.com/versions.json').read) rescue ">0"

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
  gem 'github-pages', versions['github-pages']
  gem 'jekyll-octicons'
  gem 'jekyll-readme-index'
  gem 'jekyll-mentions'
  gem 'jemoji'
end

group :scripts do
  gem 'octokit'
end

group :test do
  gem 'html-proofer'
end

gem 'rb-fsevent', '0.10.4'
