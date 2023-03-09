window.addEventListener('load', ()=>{

});

// $(document).ready(()=>{

// });

$(()=>{
    $('#btn1').click('click', ()=>{
        alert('Sucesso!');
    });
})

$(()=>{
    $('#btn2').click('click', (e)=>{
        $('h2').html('<h2>Bão?</h2>');
    });
})

$(()=>{
    $('#btn3').click('click', (e)=>{
        $('div').show();
        $('p').hide();
    });
})

$(()=>{
    $('#btn4').on('click', ()=>{
        $('h1').fadeOut(1000, ()=>{
            $('h1').text('Chama ela que ela vem');
            $('h1').fadeIn(1000);
        });
    });
})