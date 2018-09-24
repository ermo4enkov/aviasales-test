export default url => 
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if(this.status == 200){
        resolve(this.response)
      } 
      else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error)
      }
    }

    request.onerror = () => {
      reject(new Error("request error"))
    };

    request.send();
});
