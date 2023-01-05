<%{
fet = Form_name[ID != 0];
a = fet.count();
aa = a / 4;
aa = ceil(aa);
b = 1;
if(page_parameter=="1")
{
page1=page_parameter.tolong();
page2=5;
}
else
{
page1 = (((page_parameter.tolong()-1)*5)+1);
page2=page1+4;
}
for each i in Form_nmae[ID != 0] sort by field_name range from page1 to page2
{
%>
<%=i.field_name%><br>
<%
}
%>
<br>
<%
for each i in fet
{
if(b <= aa)
{
%>
<a href="#Page:page_link_name?page_parameter=<%=b%>"><%=b%></a>
<%
}
b = b + 1;
}
}%>