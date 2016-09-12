//  window.onload=function()
//  {
//  	window.alert('a');
//  };
// function add(a,b){
// 	return a+b;
// }

// console.log(add(3,2));

// mod_number = function(a)
// {
// 	if (a<0) {
// 		return -1*a;
// 	}
// 	else {
// 		return a;
// 	}
// };

// console.log(mod_number(-2));
window.onload=function()
{
	// var a= document.getElementById("one");
	// a.innerHTML +="Hello world"
	// // document.getElementById("one").innerHTML +="Hello"
	// a.style.backgroundColor="#2C3E50";
	// document.getElementById('inc').onclick=function(){
	// 	var val= document.getElementById('one');
	// 	var val2= document.getElementById('two');
	// 	var val3= document.getElementById("answer");
	// 	 val3.value= Number(val.value)+Number(val2.value); //Parse int
	//};
			

		var itr=0;

		document.getElementById("cell1").onclick=function(){
			var a=document.getElementById("cell1");

			check(itr,a,0)
			itr++
			// a.style.width= "30%"
			// a.style.background="#2C3E50"
			// console.log(itr)
			// check(itr,a)
		};
		document.getElementById("cell2").onclick=function(){
			var a=document.getElementById("cell2");
			check(itr,a,1)
			itr++
		};
		document.getElementById("cell3").onclick=function(){
			var a=document.getElementById("cell3");
			check(itr,a,2)
			itr++
		};

		document.getElementById("cell4").onclick=function(){
			var a=document.getElementById("cell4");
			check(itr,a,3)
			itr++
		};
		document.getElementById("cell5").onclick=function(){
			var a=document.getElementById("cell5");
			check(itr,a,4)
			itr++
		};
		document.getElementById("cell6").onclick=function(){
			var a=document.getElementById("cell6");
			check(itr,a,5)
			itr++
		};
		
		document.getElementById("cell7").onclick=function(){
			var a=document.getElementById("cell7");
			check(itr,a,6)
			itr++
		};
		document.getElementById("cell8").onclick=function(){
			var a=document.getElementById("cell8");
			check(itr,a,7)
			itr++
		};
		document.getElementById("cell9").onclick=function(){
			var a=document.getElementById("cell9");
			check(itr,a,8)
			itr++
		};

		document.getElementById("submit").onclick=function(){
			window.location.reload()
		};
	

	function check(itr,a,index)
	{
		if (itr%2==1)
		{
			player2(a,index);

		}

		else {
			player1(a,index);
			// console.log(itr)
		}

		
		
	};
	var arr=[0,0,0,0,0,0,0,0,0]

	function player1(a,index){
		a.style.width= "30%"
			a.style.height="30%"
			a.style.background= "#2C3E50";
			// a.borderRadius= "50%"; 
			a.style.border="20px solid white";
			a.setAttribute("id","done");
			document.getElementById("ttt").style.background="#2C3E50"
			arr [index]=1
			win()
		};

	function player2(a,index){
		a.style.width= "30%"
			a.style.height="30%"
			a.style.background= "#18BC9C";
			// a.borderRadius= "50%"; 
			a.style.border="20px solid white";
			a.setAttribute("id","done");
			document.getElementById("ttt").style.background="#18BC9C"
			arr[index]=2;
			win()
};
	
	


function win()
{
			var answer;
			if(arr[0]==arr[1]&&arr[1]==arr[2])
			{
				if (arr[0]==1)
				{
					answer= "player 1"
				}
				if (arr[0]==2) answer="player 2"
			}
			if(arr[3]==arr[4]&&arr[4]==arr[5])
			{
				if (arr[3]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer="player 2"
			}
			if(arr[6]==arr[7]&&arr[7]==arr[8])
			{
				if (arr[6]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer="player 2"
			}
			if(arr[0]==arr[3]&&arr[3]==arr[6])
			{
				if (arr[0]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer="player 2"
			}
			if(arr[1]==arr[4]&&arr[4]==arr[7])
			{
				if (arr[1]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer= "player 2"
			}
			if(arr[2]==arr[5]&&arr[5]==arr[8])
			{
				if (arr[2]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer="player 2"
			}

			if(arr[0]==arr[4]&&arr[4]==arr[8])
			{
				if (arr[0]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer= "player 2"
			}

			if(arr[6]==arr[4]&&arr[4]==arr[2])
			{
				if (arr[6]==1)
				{
					answer="player 1"
				}
				if (arr[0]==2) answer="player 2"
			}
		if (answer=="player 1")
		{	

			window.alert("Player 1 won")
			window.location.reload()
		}
		if(answer== "player 2") {window.alert("Player 2 won"); window.location.reload()
		}

		if(itr==8 && answer!="player 1" && answer!="player 2") {window.alert("Draw");window.location.reload()
		} 
		
};

function restart()
{}

};