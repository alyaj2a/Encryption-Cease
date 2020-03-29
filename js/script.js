function conv_ascci(message, number){

  phraseLength = message.length;

  for(var i=0; i<phraseLength ; i++ ){

    codeLetter = parseInt(message[i].charCodeAt());  

    if( (codeLetter >= 0 && codeLetter <= 64) || (codeLetter >= 91 && codeLetter <= 96) || (codeLetter >= 123 && codeLetter <= 255) ){

      newCodeLetter = codeLetter;
    }
    else{
      
      if(codeLetter>=65 && codeLetter <=90){
        newCodeLetter = codeLetter + number;
        if(newCodeLetter >=91){
          newCodeLetter = newCodeLetter - 26;
        }
      }
      else{
        newCodeLetter = codeLetter + number;
        if(newCodeLetter >= 123){
          newCodeLetter = newCodeLetter - 26;
        }
      }
    } 
    result = String.fromCharCode(newCodeLetter);
    document.write(result + "<br>" );

  }
}

conv_ascci("ALY YULIZA",7);