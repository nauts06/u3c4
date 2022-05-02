let navbar =()=>{
    return `<a href="../index.html"><h1>News</h1></a> 
    <input type="text" id="search_input" placeholder="search news">`
}

const search = (e) => {
  if(e.code === "Enter"){
       const query = document.querySelector("#search_input").value;
      localStorage.setItem("a",JSON.stringify(query));
      window.location.href = "../search.html";
  }
 
}

export {navbar,search}