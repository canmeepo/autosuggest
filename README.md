# autosuggest
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Download 
```bash
git clone https://github.com/canmeepo/autosuggest.git
```
## 1. Setup
```bash
npm install
```
## 2. Run
```bash
npm start 
```

## extra bonus

```bash
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
```
