
    var buttonPlus = Array.from(document.getElementsByClassName("add"));
    var buttonmin = Array.from(document.getElementsByClassName("minus"));
    var removeButton = Array.from(document.getElementsByClassName("fa-trash-alt"));


//add pruduct    
    for(let i=0;i<buttonPlus.length;i++) {
        buttonPlus[i].addEventListener("click", function () {
            buttonPlus[i].nextElementSibling.innerHTML++;
            TotalPrice()
        })
    }
    
    //min pruduct 
    for(let i=0;i<buttonmin.length;i++) {
        buttonmin[i].addEventListener("click", function () {
        if ( buttonmin[i].previousElementSibling.innerHTML>0)
            buttonmin[i].previousElementSibling.innerHTML--;
            TotalPrice()
        })
    }

    //calculate total price  
    function TotalPrice() {
            
            let totalPrice = 0;
    
            var price = Array.from(document.getElementsByClassName("price"));
            var quantityElements = document.querySelectorAll('.qte');
            var total = document.getElementById('total');

            quantityElements.forEach((quantityElement, index) => {
                //const quantity = parseInt(quantityElement.textContent);
                totalPrice += quantityElements[index].innerHTML * price[index].innerHTML;
            });
            
                console.log(totalPrice);
            return total.innerHTML = totalPrice;
        }

        for(let i=0;i<removeButton.length;i++) {
        removeButton[i].addEventListener('click', function() {
            removeButton[i].parentNode.remove();
            TotalPrice();
        }); 
        }

// liked event
        var heart = Array.from(document.getElementsByClassName("fa-heart"));
        for(let i=0;i<heart.length;i++) {
            heart[i].addEventListener('click', function() { 
                    heart[i].classList.toggle('liked');
            }); 
        }
      


