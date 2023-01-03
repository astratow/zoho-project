void trener(int num)
{
	total = 0;
	numlist = ",".leftpad(num).toList("");
	// info numlist;
	for each index i in numlist
	{
		if(i%3 ==0 || i%5 ==0){
		total = total + i;
		info total;
		}
	}
	info total;
}