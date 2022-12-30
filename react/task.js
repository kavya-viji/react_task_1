var m = document.createElement("INPUT");
	m.setAttribute("type","text");
	m.setAttribute("placeholder","Name");
	m.setAttribute("id","name");
	document.body.appendChild(m);
	m.style.border="double";
	m.style.borderWidth="3px";
	m.style.borderColor="red";
	document.write("<br>");
	document.write("<br>");
	
var n = document.createElement("INPUT");
	n.setAttribute("type","text");
	n.setAttribute("placeholder","Age");
	n.setAttribute("id","age");
	document.body.appendChild(n);
	n.style.border="double";
	n.style.borderWidth="3px";
	n.style.borderColor="red";
	document.write("<br>");
	document.write("<br>");
	
// var pd=document.createElement("INPUT");
// 	pd.setAttribute("type","text");
// 	pd.setAttribute("placeholder","Product Description");
// 	pd.setAttribute("id","description");
// 	document.body.appendChild(pd);
// 	document.write("<br>");
// 	document.write("<br>");
	
	k = document.createElement("Button");
		k.setAttribute("onclick","main()");
		document.body.appendChild(k);
		k.style.border="dotted";
		k.style.borderWidth="3px";
		k.style.borderColor="red";
		k.innerHTML="SUBMIT";

    
		b = document.createElement("Button");
		b.setAttribute("onclick","del()");
		b.style.marginLeft="10px";
		document.body.appendChild(b);
		b.style.border="dotted";
		b.style.borderWidth="3px";
		b.style.borderColor="red";
		b.innerHTML="DELETE";
	
		c = document.createElement("Button");
		c.setAttribute("onclick","update()");
		c.style.marginLeft="10px";
		document.body.appendChild(c);
		c.style.border="dotted";
		c.style.borderWidth="3px";
		c.style.borderColor="red";
		c.innerHTML="UPDATE";
		
		div=document.createElement("div")
		div.style.marginTop="50px"
		document.body.appendChild(div)

	function main()
		 {
		name=(document.getElementById("name").value);
		age=Number(document.getElementById("age").value);
		// pdes=(document.getElementById("description").value);
		div.innerHTML=`<ul>${name}</ul>`+`<ul>${age}`
	      }
		  
	function del() 
		  {
		div.innerHTML=null
       	  }
		  
	function update()
		  {
		name=(document.getElementById("name").value);
		age=Number(document.getElementById("age").value);
		// pdes=(document.getElementById("description").value);
		div.innerHTML=`<ul>${name}</ul>`+`<ul>${age}`
	      }
	 	 document.body.style.backgroundColor="gray";
	 	 document.body.style.textAlign="center";
		 document.body.style.marginTop="20%";
		 
		 