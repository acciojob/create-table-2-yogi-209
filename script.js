function createTable()
{
	const table=document.getElementById("myTable");
	const rowInput=prompt("Input number of rows");
	const colsInput=prompt("Input number of columns");

	if(rowInput==null||colsInput==null)
	{
		return 
	}
	const rn=parseInt(rowInput,10)
	const cn=parseInt(colsInput,10)
	if(isNaN(rn)||isNaN(cn)){
		return 
	}
	if(rn<=0 ||cn<=0){
	alert("Please enter the positive number greater than 0");
	}
	table.innerHtml="";
	for(let i=0;i<rn;i++)
		{
			const row=table.insertRow(i);
		for (let j=0;j<cn;j++)
			{
const cell=table.insertCell(j)
				cell.textContent=`Row-${i} Column-${j}`;
			}
		}
    //Write your code here
  
}
