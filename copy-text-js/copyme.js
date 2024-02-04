















function copytext(){
  document.querySelector('#text').select()
  document.execCommand('copy')
}

function copy(selector,command){
  if(selector) document.querySelector(selector).select();
  if(!command)command = 'copy';
  document.execCommand(command);
}







