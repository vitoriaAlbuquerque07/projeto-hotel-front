import Card from "../../components/Card";
import { FaCircle } from "react-icons/fa";
import { LuBed } from "react-icons/lu";
import { FiTrendingUp, FiDollarSign, FiCalendar } from "react-icons/fi";
import CardReview from "../../components/CardReview";

const Dashboard = () => {
    const dadosReview = [
        {
            id: 1,
            titulo: "Taxa de Ocupação",
            valor: "20%",
            descricao: "2 de 10 quartos",
            estatisticas: "↘ -5% vs. mês anterior", 
            valorTendencia: -5, 
            icone: <FiTrendingUp size={24} />,
            cor: "bg-[#0f4f6e]"
        },
        {
            id: 2,
            titulo: "Receita do Mês",
            valor: "R$ 3.400",
            descricao: "Receita confirmada",
            estatisticas: "↗ 8% em comparação com o mês anterior",
            valorTendencia: 8, 
            icone: <FiDollarSign size={24} />,
            cor: "bg-white"
        },
        {
            id: 3,
            titulo: "Reservas Ativas",
            valor: "5",
            descricao: "R$ 5.500 pendente",
            estatisticas: "",
            icone: <FiCalendar size={24} />,
            cor: "bg-white"
        },
        {
            id: 4,
            titulo: "Quartos Disponíveis",
            valor: "5",
            descricao: "Prontos para reserva",
            estatisticas: "",
            icone: <LuBed size={24} />,
            cor: "bg-[#21a568]"
        }
    ];
    return (
        <main className="p-8 bg-[#fcfaf8] flex flex-col gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {dadosReview.map((item) => (
                    <CardReview
                        key={item.id}
                        titulo={item.titulo}
                        valor={item.valor}
                        descricao={item.descricao}
                        estatisticas={item.estatisticas}
                        valorTendencia={item.valorTendencia}
                        icone={item.icone}
                        cor={item.cor}
                    />
                ))}
            </div>

            {/* CARD 1: Status dos Quartos */}
            <Card
                titulo="Status dos Quartos"
                info={
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-green-500" /> Vago</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-blue-800" /> Ocupado</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-yellow-500" /> Reservado</span>
                        <span className="flex items-center gap-1"><FaCircle size={8} className="text-red-500" /> Manutenção</span>
                    </div>
                }
            >
                <div className="h-32 rounded-xl flex items-center justify-center text-gray-400">
                    Grid de Quartos aqui...
                </div>
            </Card>

            {/* CARD 2: Reservas Recentes */}
            <Card
                titulo="Reservas Recentes"
                info={
                    <a
                        href="#"
                        className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                        Ver todas <span>&rarr;</span>
                    </a>
                }
            >
                {/* ... conteúdo do card ... */}
                <h1>Lista de reservas vai aqui...</h1>
            </Card>

        </main>
    );
}

export default Dashboard;