FROM node:17.6.0

# Copy the app's code into the container
ENV APP_HOME /app
COPY . $APP_HOME
WORKDIR $APP_HOME

RUN npm install
RUN npm install -g @vue/cli
RUN npm install sass-loader style-loader --save
RUN npm rebuild node-sass

CMD ["vue", "serve"]