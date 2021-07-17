// ids: dayOfTheWeek

// Akan Name List: MALE => Kwesi(Sun), Kojo(Mon), Ebo(Tue), Kweku(Wed), Ekow(Thur), Kofi(Fri), Kwame(Sat)

// Akan Name List: FEMALE => Akosua(Sun), Adjoa(Mon), Abena(Tue), Ekua(Wed), Aba(Thur), Efua(Fri), Amba(Sat)





 

    
function ValidateForm(form)
{
    ErrorText= "";

        if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )   // Check if gender has been selected 
        {
            alert ( "Please choose your Gender: Male or Female" );
            return false;
        }

        if ( form.gender[0].checked == true )   // Check if the selected gender is male
        {
            alert ( "Gender: Male" );

        } else ( form.gender[1].checked == true )   // Check if the selected gender is female
        {
            alert ( "Gender: Female" );
        }

        if (ErrorText= "") 
        { 
            form.submit() 
        }
}
        