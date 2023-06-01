function regCheck(regNum, province) 
{
  //const validProvinces = ['GP', 'L', 'EC', 'MP'];
  if (regNum.endsWith("GP")&&province.includes("GP")||regNum.endsWith("MP")&&province.includes("MP")||regNum.endsWith("L")&&province.includes("L")||regNum.endsWith("EC")&&province.includes("EC")) 
  {
    return true;
  }
  else  
  {
    return false;
  }
  
}