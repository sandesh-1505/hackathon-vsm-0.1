const search = () => {
    const searchBox = document.querySelector(".search-input").value.toUpperCase();
    const storeItems = document.querySelector(".shop-section");
    const product = document.querySelectorAll(".box");  
    const productName = storeItems.getElementsByTagName("h2");

    for (let i=0;i<productName.length;i++)
        {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match)
            {
            let textValue = match.textContent || match.innerHTML;

             if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
             }else{
                product[i].style.display = "none";
             }
            }
        }
    
}