<%{
	%>
<!DOCTYPE html5>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- links to W3.css library - deleting may effect mobile view and other aspects -->
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-2018.css">
	<!-- end of link section -->
	<title>Children Profile</title>
</head>
<body>
<%
	// 	parentLogin = Child[Parent_Administrator == zoho.loginuser];
	/*** variable children initiates for each loop, which relates to all fields in the form ***/
	children = Child[ID == input.ID.toLong()];
	/*** if statement checks if children data exists ***/
	if(children.toString() != "" && children != null && children.toString() != "null")
	{
		/* beginning of for each loop */
		for each  child in children
		{
			%>
<header class="w3-row w3-padding" style="text-align: center">
<h2 ><%=child.Child_Name.first_name%><br><%=child.Child_Name.last_name%></h2>
</header>

<section class="w3-row col-container">
  <div class="w3-padding w3-card w3-col col m12 l6">
  
<!-- Children Details Table-->

<table class="w3-table w3-bordered" >
<thead class="table-head w3-blue-grey" >
    <th style="width:50%">
	Child Details
</th>
<th style="width:50%">
<%
			/* beginning of if statement check - first_name */
			if(child.Child_Name.first_name != "")
			{
				%>
<%=child.Child_Name.first_name%>&nbsp
<%
			}
			else
			{
				%>
First Name - No Data
<%
			}
			/* end of if statement check - first_name */
			/* beginning of if statement check - last_name*/
			if(child.Child_Name.last_name != "")
			{
				%>
<%=child.Child_Name.last_name%></th>
<%
			}
			else
			{
				%>
Last Name - No Data
<%
			}
			/* beginning of if statement check - last_name */
			%>
</thead>
<tbody>

<!-- Child Details -->
<!-- Gender -->
<tr class="w3-darker-grey">
<td>
Gender:</td><td>
<%
			/* beginning of if statement check - Child_Gender */
			if(child.Child_Gender != "" && child.Child_Gender != null)
			{
				%>
<%=child.Child_Gender%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			/* end of if statement check - Child_Gender*/
			%>
</td></tr>

<!-- Date of Birth -->
<tr class="w3-light-grey"><td>Date of Birth:</td><td>
<%
			/* beginning of if statement check - Child_DateofBirth */
			if(child.Child_DateofBirth != null && child.Child_DateofBirth.toString() != "")
			{
				%>
<%=child.Child_DateofBirth%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			/* end of if statement check - Child_DateofBirth */
			%>
</td>
</tr>

<!-- Known As -->
<tr class="w3-darker-grey"><td>Known As:</td><td>
<%
			/* beginning of if statement check - Known_As */
			if(child.Known_As != null && child.Known_As != "")
			{
				%>
<%=child.Known_As%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			/* end of if statement check - Known_As */
			%>
</td></tr>

<!-- Syblings -->
<tr class="w3-light-grey"><td>Syblings:</td><td>
<%
			/* beginning of if statement check - Child_Siblings */
			if(child.Child_Siblings != null && child.Child_Siblings != "")
			{
				%>
<%=child.Child_Siblings%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			/* end of if statement check - Child_Siblings */
			%>
</td></tr>

<!-- Religion -->
<tr class="w3-darker-grey"><td>Religion:</td><td>
<%
			/* beginning of if statement check - Child_Religion */
			if(child.Child_Religion != null && child.Child_Religion != "")
			{
				%>
<%=child.Child_Religion%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
<!-- Address -->

<!--First line -->
<tr class="w3-light-grey"><td>Address</td>
<%
			/* beginning of if statement check - Child_Address_Home.address_line_1 */
			if(child.Child_Address_Home.address_line_1 != null && child.Child_Address_Home.address_line_1 != "")
			{
				%>
<td><%=child.Child_Address_Home.address_line_1%>
<%
			}
			else
			{
				%>
Not 
Entered</td></tr>
<%
			}
			%>
<!-- Second line -->
<%
			/* beginning of if statement check - Child_Address_Home.address_line_2 */
			if(child.Child_Address_Home.address_line_2 != null && child.Child_Address_Home.address_line_2 != "")
			{
				%>
<tr class="w3-light-grey"><td></td><td><%=child.Child_Address_Home.address_line_2%></td></tr>
<%
			}
			%>
<!-- District/City -->
<tr class="w3-darker-grey"><td>City/District</td>
<td>
<%
			/* beginning of if statement check - Child_Address_Home.district_city */
			if(child.Child_Address_Home.district_city != null && child.Child_Address_Home.district_city != "")
			{
				%>
<%=child.Child_Address_Home.district_city%>
<%
			}
			else
			{
				%>
Not Entered</td></tr>
<%
			}
			%>
<!-- County -->
<tr class="w3-light-grey"><td>County</td><td>
<%
			/* beginning of if statement check - Child_Address_Home.state_province */
			if(child.Child_Address_Home.state_province != null && child.Child_Address_Home.state_province != "")
			{
				%>
<%=child.Child_Address_Home.state_province%>
<%
			}
			else
			{
				%>
Not Entered</td></tr>
<%
			}%>
<!-- Post Code -->
<tr class="w3-darker-grey"><td>Post Code</td><td><%
			/* beginning of if statement check - Child_Address_Home.postal_Code */
			if(child.Child_Address_Home.postal_Code != null && child.Child_Address_Home.postal_Code != "")
			{
				%>
<%=child.Child_Address_Home.postal_Code%>
<%
			}
			else
			{
				%>
Not Entered</td></tr>
<%
			}
%>
			<!-- Country -->
<tr class="w3-light-grey"><td>Country</td><td>
<%
/* beginning of if statement check - Child_Address_Home.country */
			if(child.Child_Address_Home.country != null && child.Child_Address_Home.country != "")
			{
				%>


<%=child.Child_Address_Home.country%>
</td></tr>
<%
			}
			else
			{
				%>
Not Entered</td></tr>
<%
			}
			%>
</tbody>
</table>
</div>
 <div class="w3-padding w3-card w3-col col m12 l6">
  
<!-- Dietary table -->
<table class="tg w3-table w3-hoverable w3-bordered">
<thead class="table-head">
<th class="w3-blue-grey" style="width:50%">
Dietary	
</th>
<th class="w3-blue-grey" style="width:50%"></th>
	
</thead>
<tbody>
		<tr class="w3-darker-grey"><td>Dietary code:</td><td>
<% /* beginning of if statement check - Dietary_Requirements */

			if(child.Dietary_Requirements != null && child.Dietary_Requirements != "")
			{
				%>
<%=child.Dietary_Requirements%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- Allergies -->
<tr class="w3-light-grey"><td>Allergies:</td><td>
<% /* beginning of if statement check - Child_Allergies */
 
			if(child.Child_Allergies != null && child.Child_Allergies != "")
			{
				%>
<%=child.Child_Allergies%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!--Medical -->
<tr class="w3-darker-grey"><td>Medical Details:</td><td>
<% /* beginning of if statement check - Child_Medical_Details1 */
			if(child.Child_Medical_Details1 != null && child.Child_Medical_Details1 != "")
			{
				%>
<%=child.Child_Medical_Details1%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>
</tbody>
</table>
<br>

<!-- Doctors -->
<table class="w3-table w3-bordered" >
<thead class="table-head w3-blue-grey" >
<th style="width:50%">
Doctors
</th>
<th style="width:50%"></th>
</thead>

<!-- Doctors Name -->
<tr class="w3-darker-grey"><td>Doctors Name:</td><td>
<% /* beginning of if statement check - Child_Doctor */
			if(child.Child_Doctor != null && child.Child_Doctor.tostring() != "")
			{
				%>
<%=child.Child_Doctor%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!--Surgery Phone number-->
<tr class="w3-light-grey"><td>Surgery Phone Number:</td><td>
<% /* beginning of if statement check - Doctor_s_Phone_Number */
			if(child.Doctor_s_Phone_Number != null && child.Doctor_s_Phone_Number != "")
			{
				%>
<%=child.Doctor_s_Phone_Number%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- Doctor Surgery Address -->
<tr class="w3-darker-grey"><td>Address of Surgery:</td><td>
<% /* beginning of if statement check - Doctor_s_Address */
			if(child.Doctor_s_Address != null && child.Doctor_s_Address.toString() != "")
			{
				%>
<%=child.Doctor_s_Address.address_line_11%>
<%
			}
			else
			{
				%>
Not Entered
<% /* beginning of if statement check - Doctor_s_Address.address_line_21 */
			}
			if(child.Doctor_s_Address.address_line_21 != null && child.Doctor_s_Address.address_line_21.toString() != "")
			{
				%>
<br><%=child.Doctor_s_Address.address_line_21%>
<% /* beginning of if statement check - Doctor_s_Address.district_city1 */
			}
			if(child.Doctor_s_Address.district_city1 != null && child.Doctor_s_Address.district_city1.toString() != "")
			{
				%>
<br><%=child.Doctor_s_Address.district_city1%>
<% /* beginning of if statement check - Doctor_s_Address.state_province1 */
			}
			if(child.Doctor_s_Address.state_province1 != null && child.Doctor_s_Address.state_province1.toString() != "")
			{
				%>
<br><%=child.Doctor_s_Address.state_province1%>
<% /* beginning of if statement check - Doctor_s_Address.postal_Code1 */
			}
			if(child.Doctor_s_Address.postal_Code1 != null && child.Doctor_s_Address.postal_Code1.toString() != "")
			{
				%>
<br><%=child.Doctor_s_Address.postal_Code1%>
<% /* beginning of if statement check - Doctor_s_Address.country1 */
			}
			if(child.Doctor_s_Address.country1 != null && child.Doctor_s_Address.country1.toString() != "")
			{
				%>
<br><%=child.Doctor_s_Address.country1%>
<% 
			}
			%>
</td></tr>
</tbody>
</table>
</div>

<div class="w3-padding w3-card w3-col col m12 l6">
<table class="w3-table w3-bordered" >
<thead class="table-head w3-blue-grey" >
<th style="width:50%">
Childcare Settings
</th>
<th style="width:50%"></th>
</thead>
<tbody>
<tr class="w3-darker-grey">

<!-- Childcare Setting -->
<td>Childcare Setting:</td><td>
<% /* beginning of if statement check - Childcare_Setting */
			if(child.Childcare_Setting != null && child.Childcare_Setting.toString() != "")
			{
				%>
<%=child.Childcare_Setting.Setting_Name%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- Attendance Period -->
<tr class="w3-light-grey"><td>Attendance Period:</td><td>
<% /* beginning of if statement check - Attendance_Start_Date */
			if(child.Attendance_Start_Date != null && child.Attendance_Start_Date.toString() != "")
			{
				%>
<%=child.Attendance_Start_Date%>&nbsp-&nbsp
<%
			}
			else
			{
				%>
(Start Date) Not Entered
<% /* beginning of if statement check - Attendance_Leaving_Date */
			}
			if(child.Attendance_Leaving_Date != null && child.Attendance_Leaving_Date.toString() != "")
			{
				%>
<%=child.Attendance_Leaving_Date%>
<%
			}
			else
			{
				%>
&nbsp(Leaving Date) Not Entered
<%
			}
			%>
</td></tr>

<!-- Term Time only -->
<tr class="w3-darker-grey"><td>Term Time only:</td><td>
<% /* beginning of if statement check - Term_Time_Only */
			if(child.Term_Time_Only != null && child.Term_Time_Only.toString() != "")
			{
				%>
Yes
<%
			}
			else
			{
				%>
No
<%
			}
			%>
</td></tr>

<!-- Status -->
<tr class="w3-light-grey"><td>Status:</td><td>
<% /* beginning of if statement check - Child_Status */
			if(child.Child_Status != "")
			{
				%>
<%=child.Child_Status%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>
</tbody>
</table>
</div>
<div class="w3-padding w3-card w3-col col m12 l6">

<!-- Registration table begin -->
<table class="w3-table w3-bordered" >
<thead class="table-head w3-blue-grey" >
    <th style="width:50%">
	Registration
	</th>
<th style="width:50%"></th>
</thead>
<tbody>

<!-- Registation form -->
<tr class="w3-darker-grey"><td>Registration Form:</td><td>
<% /* beginning of if statement check - Child_Registration_Form */
			if(child.Child_Registration_Form != null && child.Child_Registration_Form.toString() != "")
			{
				%>
<%=child.Child_Registration_Form%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!--fe forms -->
<tr class="w3-light-grey"><td>FE Forms:</td>
<td>
Not Entered</td></tr>
<tr class="w3-darker-grey"><td>FE Effective Date:</td><td>
<% /* beginning of if statement check - Eligibility_Code_Start_Date */
			if(child.Eligibility_Code_Start_Date != null && child.Eligibility_Code_Start_Date.toString() != "")
			{
				%>
<%=child.Eligibility_Code_Start_Date%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- Total Weekly Free Entitlement -->
<tr class="w3-light-grey"><td>Total Weekly Free Entitlement:</td><td>
<% /* beginning of if statement check - Total_Free_Entitlement */
			if(!child.Total_Free_Entitlement.isEmpty() && child.Total_Free_Entitlement.toString() != "" && child.Total_Free_Entitlement != null)
			{
				%>
<%=child.Total_Free_Entitlement.toNumber()%>
<%
				// }elseif(child.Free_Entitlement_Extended.isEmpty() && child.Free_Entitlement_Extended.toString() == "" && child.Free_Entitlement_Extended == null){
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- FE extended portion -->
<tr class="w3-darker-grey"><td>FE extended portion ( included in total above):</td><td>
<% /* beginning of if statement check - Free_Entitlement_Extended */
			if(child.Free_Entitlement_Extended != null && child.Free_Entitlement_Extended >= 0)
			{
				%>
<%=child.Free_Entitlement_Extended%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- FE Eligibility Code -->
<tr class="w3-light-grey"><td>FE Eligibility Code (30h):</td><td>
<% /* beginning of if statement check - Free_Entitlement_Universal */
			if(child.Free_Entitlement_Universal != null && child.Free_Entitlement_Universal.toString() != "")
			{
				%>
Yes
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>

<!-- Additional Information/Comments -->
<tr class="w3-darker-grey"><td>
Additional Information Comments:</td><td>
<% /* beginning of if statement check - Additional_information_and_comments */
			if(child.Additional_information_and_comments != null && child.Additional_information_and_comments != "")
			{
				%>
<%=child.Additional_information_and_comments%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>
</tbody>
</table>

 </div>
 
</div>
</div>
<%
		}
	}
	else
	{
		%>
<h2>error</h2>
<%
	}
	/************************************************************* paste here *****************************************************************************/
	childrenContacts = children.Child_Contacts;
	if(!childrenContacts.isEmpty())
	{
		for each  contact in childrenContacts
		{
			%>
<div class="w3-padding w3-card w3-col col m12 l6">
<table class="w3-table w3-bordered" >
<thead class="table-head w3-blue-grey" >
    

<!-- contact full name and contact info -->
    <th style="width: 50%">Full Name:</th><th style="width: 50%">
<% /* beginning of if statement check - Name */
			if(contact.Name.toString() != "")
			{
				%>
<%=contact.Name%>
<%
			}
			else
			{
				%>
No Contact Details Entered
<%
			}
			%>
</th>
</thead>
<tbody>

<!-- Relationship -->

<tr class="w3-darker-grey"><td>Relationship:</td><td>
<% /* beginning of if statement check - Relationship */
			if(contact.Relationship.toString() != "")
			{
				%>
<%=contact.Relationship%>
<%
			}
			else
			{
				%>
Not Entered
<%
			}
			%>
</td></tr>
<!-- Is Emergency Contact? -->
<tr class="w3-light-grey "><td>Is Emergency Contact?:</td><td>
<% /* beginning of if statement check - Is Emergency Contact? */
			if(contact.Mobile_Phone_Number != "")
			{
				%>
Yes
<%
			}
			else
			{
				%>
No
<%
			}
			%>
</td></tr>

<!-- contact mobile phone number -->

<tr class="w3-darker-grey"><td>Mobile Phone:</td><td>
<% /* beginning of if statement check - Mobile_Phone_Number */
			if(contact.Mobile_Phone_Number != "")
			{
				%>
<%=contact.Mobile_Phone_Number%>
<%
			}
			else
			{
				%>
Contact Details Not Entered
<%
			}
			%>
</td></tr>
</tbody>
</table></div>
<br>
<%
		}
	}
	else
	{
		%>
<h2>Contact Details Not Found</h2></section>
<%
	}
	%>
<!-- styling -->
<style type="text/css">

.w3-darker-grey{
	background:#DCDCDC;
}
.col-container {
 display: flex;
    flex-direction: column;
    width: 100%;
	align-items: center;

    &__wrap {

        &--outer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
        }

        &--inner {
            display: flex;
            flex-direction: row;
            width: 33.33%;
        }
    }
}
.col {
  flex-grow: 1;
  
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
th {
	width: 50%;
}
</style>
</body>
<%

}%>