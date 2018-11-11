const faker = require('faker');
const Gallery = require('./Gallery.js');
const db = require('./index.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

AWS.config.update({ });

AWS.config.loadFromPath(__dirname + '/config.json');

const seed = [];

let s3 = new AWS.S3({ apiVersion: '2006-03-01' });

let params = {
  Bucket: 'homedetails'
};

s3.listObjects(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let baseURL = `https://s3-us-west-1.amazonaws.com/homedetails/`;
    let generateImagesArr = () => {
      let imgArr = [];  
      for (let i = 1; i <= data.Contents.length; i++) {
        let randomIndex = Math.floor(Math.random() * data.Contents.length);
        if (!randomIndex) {
          randomIndex +=1;
        }
        imgArr.push(baseURL + data.Contents[randomIndex].Key);
      }
      return imgArr;
    }
    
    for (let i = 0; i < 100; i++) {
      let property = {};
      property.id = i
      property.imageUrl = generateImagesArr();
      property.address = faker.address.streetAddress(),
      property.zipcode = faker.address.zipCode(),
      property.city = faker.address.city(),
      property.State = faker.address.state()
      seed.push(property);
    }
    fs.writeFile(path.join(__dirname, 'sampleData.js'), JSON.stringify(seed, null, '\t'), err => {
      if (err) {
        console.log(err);
      } else {
        console.log('sampleData created');
      }
    })
  }
})
