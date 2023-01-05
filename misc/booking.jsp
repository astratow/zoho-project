<%{
	%>
<!DOCTYPE html5>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-2018.css">
	<title>Children Profile</title>
</head>
<body>
<%
	childRec = Child[ID == input.ID.toLong()].Child_Register.getAll();
	chNamelist = Child_Name[ID in childRec].ID.getAll();
	// 	chNamelist = Child_Name[ID == input.ID.toLong()].ID.getAll();
	/************* Start of if statement ************/
	if(!chNamelist.isEmpty())
	{
		for each  rec in chNamelist
		{
			chName = Child_Name[ID == rec];
			fetCBP2 = Child_Booking_Profile[Child_Name == rec];
			if(fetCBP2.count() == 0)
			{
				%>
<h1>There is no booking records for <%=chName.Child_Register%>  </h1>
<%
			}
			else
			{
				%>
<h1><%=chName.Child_Register%></h1>
<%
				/*********** Variables for each day, pulled from the fields ********************************************/
				// 	Monday
				bookings_Monday = Child_Booking_Profile[Show_Monday_booking != null && Child_Name == rec];
				setting_Monday = bookings_Monday.Monday_Childcare_Setting.Setting_Code.toString();
				enable_Monday = bookings_Monday.Monday_Enable_Day.toString();
				start_Monday = bookings_Monday.Monday_Session_Start_Time.toString();
				end_Monday = bookings_Monday.Monday_Session_End_Time.toString();
				duration_Monday = thisapp.timeSubstract(start_Monday,end_Monday);
				fe_Monday = bookings_Monday.Monday_Free_Entitlement.toString();
				status_Monday = bookings_Monday.Monday_Status.toString();
				holiday_Monday = bookings_Monday.Monday_Holiday.toString();
				cancel_Monday = bookings_Monday.Monday_Cancel.toString();
				// 	Tuesday
				bookings_Tuesday = Child_Booking_Profile[Show_Tuesday_booking != null && Child_Name == rec];
				setting_Tuesday = bookings_Tuesday.Tuesday_Childcare_Setting.Setting_Code.toString();
				enable_Tuesday = bookings_Tuesday.Tuesday_Enable_Day.toString();
				start_Tuesday = bookings_Tuesday.Tuesday_Session_Start_Time.toString();
				end_Tuesday = bookings_Tuesday.Tuesday_Session_End_Time.toString();
				duration_Tuesday = thisapp.timeSubstract(start_Tuesday,end_Tuesday);
				fe_Tuesday = bookings_Tuesday.Tuesday_Free_Entitlement.toString();
				status_Tuesday = bookings_Tuesday.Tuesday_Status.toString();
				holiday_Tuesday = bookings_Tuesday.Tuesday_Holiday.toString();
				cancel_Tuesday = bookings_Tuesday.Tuesday_Cancel.toString();
				// 	Wednesday
				bookings_Wednesday = Child_Booking_Profile[Show_Wednesday_booking != null && Child_Name == rec];
				setting_Wednesday = bookings_Wednesday.Wednesday_Childcare_Setting.Setting_Code.toString();
				enable_Wednesday = bookings_Wednesday.Wednesday_Enable_Day.toString();
				start_Wednesday = bookings_Wednesday.Wednesday_Session_Start_Time.toString();
				end_Wednesday = bookings_Wednesday.Wednesday_Session_End_Time.toString();
				duration_Wednesday = thisapp.timeSubstract(start_Wednesday,end_Wednesday);
				fe_Wednesday = bookings_Wednesday.Wednesday_Free_Entitlement.toString();
				status_Wednesday = bookings_Wednesday.Wednesday_Status.toString();
				holiday_Wednesday = bookings_Wednesday.Wednesday_Holiday.toString();
				cancel_Wednesday = bookings_Wednesday.Wednesday_Cancel.toString();
				// 	 Thursday
				bookings_Thursday = Child_Booking_Profile[Show_Thursday_booking != null && Child_Name == rec];
				setting_Thursday = bookings_Thursday.Thursday_Childcare_Setting.Setting_Code.toString();
				enable_Thursday = bookings_Thursday.Thursday_Enable_Day.toString();
				start_Thursday = bookings_Thursday.Thursday_Session_Start_Time.toString();
				end_Thursday = bookings_Thursday.Thursday_Session_End_Time.toString();
				duration_Thursday = thisapp.timeSubstract(start_Thursday,end_Thursday);
				fe_Thursday = bookings_Thursday.Thursday_Free_Entitlement.toString();
				status_Thursday = bookings_Thursday.Thursday_Status.toString();
				holiday_Thursday = bookings_Thursday.Thursday_Holiday.toString();
				cancel_Thursday = bookings_Thursday.Thursday_Cancel.toString();
				// 	Friday
				bookings_Friday = Child_Booking_Profile[Show_Friday_booking != null && Child_Name == rec];
				setting_Friday = bookings_Friday.Friday_Childcare_Setting.Setting_Code.toString();
				enable_Friday = bookings_Friday.Friday_Enable_Day.toString();
				start_Friday = bookings_Friday.Friday_Session_Start_Time.toString();
				end_Friday = bookings_Friday.Friday_Session_End_Time.toString();
				duration_Friday = thisapp.timeSubstract(start_Friday,end_Friday);
				fe_Friday = bookings_Friday.Friday_Free_Entitlement.toString();
				status_Friday = bookings_Friday.Friday_Status.toString();
				holiday_Friday = bookings_Friday.Friday_Holiday.toString();
				cancel_Friday = bookings_Friday.Friday_Cancel.toString();
				// 	variables
				dateToday = zoho.currentdate.toString("dd MMMM yyyy");
				dayToday = today.toString("EEEE");
				booking_info = Child_Booking_Profile[Show_basic_booking_information != null && Child_Name == rec];
				%>
<!-- Begin of table -->
<h2>Booking Profile</h2>
<table class="tg w3-table w3-bordered">
<thead class="table-head  w3-blue-grey">
  <strong>
    <th ><span>Day of <br> the Week</span></th>
    <th ><span>Enable Day</span></th>
    <th ><span>Start Time</span></th>
    <th ><span>End Time</span></th>
    <th ><span>Duration</span></th>
    <th ><span>Free <br>Entitlement</span></th>
    <th ><span>Childcare<br> Settings</span></th>
	</strong>
</thead>
<tbody>
<!--Monday-->
<tr class="w3-darker-grey">
<td >
Monday
</td>
<td>
<%
				/************* Start of if statement ************/
				if(enable_Monday == "false" || enable_Monday == "")
				{
					%>
No
<%
				}
				else
				{
					%>
Yes
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(start_Monday != "")
				{
					%>
<td><%=start_Monday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(end_Monday != "")
				{
					%>
<td><%=end_Monday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<td>
<%=duration_Monday%>
</td>
<%
				/************* Start of if statement ************/
				if(fe_Monday != "")
				{
					%>
<td><%=fe_Monday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(setting_Monday.toString() != "")
				{
					%>
<td ><%=setting_Monday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</tr>
  <!-- Tuesday-->
  <tr class="w3-light-grey">
  <td >
Tuesday
</td>
<td>
<%
				/************* Start of if statement ************/
				if(enable_Tuesday == "false" || enable_Tuesday == "")
				{
					%>
No
<%
				}
				else
				{
					%>
Yes
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(start_Tuesday != "")
				{
					%>
<td><%=start_Tuesday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(end_Tuesday != "")
				{
					%>
<td><%=end_Tuesday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<td>
<%=duration_Tuesday%>
</td>
<%
				/************* Start of if statement ************/
				if(fe_Tuesday != "")
				{
					%>
<td><%=fe_Tuesday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(setting_Tuesday.toString() != "")
				{
					%>
<td ><%=setting_Tuesday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</tr>
    
<!--<h5>Wednesday</h5>-->
<tr class="w3-darker-grey">
<td >
Wednesday
</td>
<td>
<%
				/************* Start of if statement ************/
				if(enable_Wednesday == "false" || enable_Wednesday == "")
				{
					%>
No
<%
				}
				else
				{
					%>
Yes
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(start_Wednesday != "")
				{
					%>
<td><%=start_Wednesday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(end_Wednesday != "")
				{
					%>
<td><%=end_Wednesday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<td>
<%=duration_Wednesday%></td>
<%
				/************* Start of if statement ************/
				if(fe_Wednesday != "")
				{
					%>
<td><%=fe_Wednesday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>

<%
				/************* Start of if statement ************/
				if(setting_Wednesday.toString() != "")
				{
					%>
<td ><%=setting_Wednesday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</tr>
<tr class="w3-light-grey">
<td  >
Thursday
</td>
<td>
<%
				/************* Start of if statement ************/
				if(enable_Thursday == "false" || enable_Thursday == "")
				{
					%>
No
<%
				}
				else
				{
					%>
Yes
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(start_Thursday != "")
				{
					%>
<td><%=start_Thursday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(end_Thursday != "")
				{
					%>
<td><%=end_Thursday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<td>
<%=duration_Thursday%>
</td>
<%
				/************* Start of if statement ************/
				if(fe_Thursday != "")
				{
					%>
<td><%=fe_Thursday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(setting_Thursday.toString() != "")
				{
					%>
<td ><%=setting_Thursday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</tr>
 <!--Friday-->
<tr class="w3-darker-grey">
<td  >
Friday
</td>
<td>
<%
				/************* Start of if statement ************/
				if(enable_Friday == "false" || enable_Friday == "")
				{
					%>
No
<%
				}
				else
				{
					%>
Yes
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(start_Friday != "")
				{
					%>
<td><%=start_Friday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(end_Friday != "")
				{
					%>
<td><%=end_Friday.subString(0,5)%></td>
<%
				}
				else
				{
					%>
<td >No Bookings</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<td>
<%=duration_Friday%>
</td>
<%
				/************* Start of if statement ************/
				if(fe_Friday != "")
				{
					%>
<td><%=fe_Friday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</td>
<%
				/************* Start of if statement ************/
				if(setting_Friday.toString() != "")
				{
					%>
<td ><%=setting_Friday%></td>
<%
				}
				else
				{
					%>
<td >NE*</td>
<%
				}
				/************* End of if statement ************/
				%>
</tr>
</table>
* NE = Not Entered
<style type="text/css">
.w3-darker-grey{
	background: #DCDCDC
}

@media screen and (max-width: 800px){
	th span 
{
	text-align: right;
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
}
.small{
text-align: right;
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;	
}
}
</style>
</body>
</html>
<%
			}
		}
	}
	else
	{
		%>
<h2>No Bookings Added Yet</h2>
<%
	}

}%>