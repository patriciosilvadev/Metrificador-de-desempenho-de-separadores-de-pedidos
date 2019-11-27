
$("#inputNPedido").keydown(function(e){
    
    if(e.keyCode == 13 || e.keyCode == 9){
        let q = $("#inputNPedido").val();
        busca(q)
    e.preventDefault();
    }
})

async function busca(param){

    axios.get(
        `http://localhost:3001/pedidosapi/${param}`)
        .then(function(response){
    
            console.log(response.data)
            $("#inputCliente").val(response.data[0].CodigoCliente);
    
            $("#inputFantasia").val(response.data[0].RazaoCliente);
            $("#inputFPg").val(response.data[0].ModalidadeCB);
            $("#inputFP").val(response.data[0].FormaParcelamento);
            $("#inputVendedor").val(response.data[0].Vendedor);
            $("#inputCliente").val(response.data[0].CodigoCliente);
            $("#inputData").val(response.data[0].Data)
            $("#inputHora").val(response.data[0].Hora)
            //response.data[0].Hora
            $("#separador").val(response.data[0].Separador)
            $("#errosseparador").val(response.data[0].ErrosSeparador)
            $("#conferente").val(response.data[0].Conferente)
            $("#errosconferente").val(response.data[0].ErrosConferentes)

            axios.get(
                `http://localhost:3001/produtosapi/${param}`,
                {}
                )
                .then(function(response){
                        console.log(response)
                 let total = 0 ;
                 response.data.forEach(element => {
                    total += element.Quantidade;
                 });
                    
                 $("#inputitens").val(response.data.length);
                 $("#inputQTDtotal").val(total);
    
                console.log(total)
    
                }).catch(function (error){
                    console.error(error)
                })
          }).catch(function (error){
              console.error(error)
    
          })
    
        }

        async function update(){
            
            axios.patch(`http://localhost:3001/create/dadosMetrica`,{

                NumeroPedido : $("#inputNPedido").val(),
                CodigoCliente: $("#inputCliente").val(),
                RazaoCliente: $("#inputFantasia").val(),
                ModalidadeCB: $("#inputFPg").val(),
                FormaParcelamento: $("#inputFP").val(),
                Vendedor: $("#inputVendedor").val(),
                Data: $("#inputData").val(),
                Hora: $("#inputHora").val(),
                Itens: $("#inputitens").val(response.data.length),
                QtdTotal: $("#inputQTDtotal").val(),
                Separador:  $("#separador").val(),
                ErrosSeparador: $("#errosseparador").val(),
                Conferente: $("#conferente").val(),
                ErrosConferentes: $("#errosconferente").val()

            }).then(function (response){
                console.log(response);
                alert("PLIM Atualizouuu")
            }).catch(function (error){
                console.error(error);
                alert("Errou")
            })
        }