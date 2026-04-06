FROM ruby:3.3-slim

RUN apt-get update -qq && apt-get install -yqq build-essential && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY Gemfile Gemfile.lock* ./
RUN bundle install

EXPOSE 4000
