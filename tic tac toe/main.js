function startGame()
{
	document.turn="X";
	setMessage(document.turn +"has to start");
}
function setMessage(msg)
{
	document.getElementById("message").innerText = msg;
}
function nextMove(square)
{
	if(square.innerText=='')
	{
		square.innerText = document.turn;
		switchTurn();
	}
	else
	{
		setMessage("Pick another square");
	}
	if(WinningCondition())
	{
		alert("Game complete");
	    alert(+" "+"Won the game");
	}
}

function switchTurn()
{
 if(document.turn=="X")
	{
		document.turn="O";
		setMessage("It's " +document.turn+" "+"turn");
	}
	else
	{
		document.turn="X";
		setMessage("It's " +document.turn+" " +"turn");
	}
}

function getText(id)
{
	return document.getElementById("s"+id).innerHTML;
}

function WinningCondition()
{
	if (check("X")||check("O"))return true;
	else return false;
}

function check(str)
{
	if 
	(
		(getText(1)==str&&getText(2)==str&&getText(3)==str)||
				(getText(4)==str&&getText(5)==str&&getText(6)==str)||
						(getText(7)==str&&getText(8)==str&&getText(9)==str)||
								(getText(1)==str&&getText(5)==str&&getText(9)==str)||
										(getText(7)==str&&getText(5)==str&&getText(3)==str)||
												(getText(1)==str&&getText(4)==str&&getText(7)==str)||
														(getText(2)==str&&getText(5)==str&&getText(8)==str)||
																(getText(3)==str&&getText(6)==str&&getText(9)==str)
	)
	return true;
	else return false;
}


