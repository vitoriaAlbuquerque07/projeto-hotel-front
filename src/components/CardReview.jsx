const CardReview = ({ titulo, valor, descricao, estatisticas, valorTendencia, icone, cor }) => {
    
    // se o fundo for "bg-white", o texto é escuro e tem borda.
    // Se for uma cor (azul/verde), o texto fica branco e sem borda.
    const isBranco = cor === "bg-white" || !cor;
    
    const estiloFundo = isBranco ? "bg-white border border-stone-200" : cor;
    const corTextoPrincipal = isBranco ? "text-gray-900" : "text-white";
    const corLegenda = isBranco ? "text-gray-500" : "text-white/80";
    const corIconeBg = isBranco ? "bg-slate-100 text-slate-600" : "bg-white/20 text-white";

    //para as estatisticas:
    let corEstatistica = "";
    if (valorTendencia < 0) {
        corEstatistica = isBranco ? "text-red-600" : "text-red-300";
    } else {
        corEstatistica = isBranco ? "text-green-600" : "text-green-300";
    }

    return (
        <div className={`rounded-2xl p-6 flex flex-col justify-between h-full shadow-sm ${estiloFundo}`}>
            
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className={`text-sm font-medium mb-1 ${corLegenda}`}>{titulo}</h3>
                    <p className={`text-3xl font-bold ${corTextoPrincipal}`}>{valor}</p>
                </div>
                
                {/* Ícone */}
                <div className={`p-3 rounded-xl ${corIconeBg}`}>
                    {icone}
                </div>
            </div>

            <div className={`text-sm ${corLegenda}`}>
                <p className="mb-2">{descricao}</p>
                
                {/* se a estatística existir... */}
                {estatisticas && (
                    <p className={`flex items-center gap-1 font-medium ${corEstatistica}`}>
                        {estatisticas}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardReview;