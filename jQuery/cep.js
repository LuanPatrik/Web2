$(()=>{
    $('#cep').on('blur', (e)=>{
        e.preventDefault();
        var numCep = $('#cep').val();
        var url = "https://viacep.com.br/ws/"+numCep+"/json/";

        $.ajax({
            url: url,
            type: "get",
            dataType: "json",

            success:function(dados){
                $("#uf").val(dados.uf);
                $("#cidade").val(dados.localidade);
                $("#logradouro").val(dados.logradouro);
                $("#bairro").val(dados.bairro);
            }
        })
    });
})