<script>
var x=0,i;
for(i=1;i<100;i++)
{if ((i%9)===0)
    x=3;
 else if((i%5)===0)
	x=2;
 else if((i%3)===0)
    x=1;
  else
    x=0;
 switch(x)
{
case 0:
	document.write(i+"\n");
   break;
case 1:
   document.write("Earth\n");
   break;
case 2:document.write("Jupiter\n");
   break;
case 3:document.write("Pluto\n");
   break;
default:break;}
}
</script>