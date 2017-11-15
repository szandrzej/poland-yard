FROM node:7.7.4

# Manually copy the font, otherwise phantomjs won't be able to use it in PDFs
#COPY src/templates/verdana /usr/share/fonts
#COPY src/templates/helvetica /usr/share/fonts
RUN fc-cache -fv

RUN mkdir /app
WORKDIR /app

EXPOSE 3000
ENTRYPOINT ["npm", "run"]

COPY package.json /app
RUN npm install

COPY . /app

CMD ["start"]
