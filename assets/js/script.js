function googleSearch(){
  const q=document.getElementById("googleQuery").value.trim();
  if(!q){alert("Please enter something to search 😄");return;}
  window.open("https://www.google.com/search?q="+encodeURIComponent(q),"_blank","noopener");
}