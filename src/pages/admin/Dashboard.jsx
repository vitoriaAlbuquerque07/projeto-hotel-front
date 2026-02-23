import Card from "../../components/Card";
import { FaCircle } from "react-icons/fa";
import CardRoom from "../../components/CardRoom";

const Dashboard = () => {

    const rooms = [
        { id: 1,  name: "Suite Master 101",    guests: 2, status: "OCUPADO"    },
        { id: 2,  name: "Suite Casal 102",      guests: 2, status: "VAGO"       },
        { id: 3,  name: "Quarto Standard 103",  guests: 1, status: "RESERVADO"  },
        { id: 4,  name: "Suite Família 104",    guests: 4, status: "VAGO"       },
        { id: 5,  name: "Suite Premium 105",    guests: 2, status: "OCUPADO"    },
        { id: 6,  name: "Quarto Duplo 106",     guests: 2, status: "MANUTENCAO" },
        { id: 7,  name: "Suite Deluxe 201",     guests: 3, status: "VAGO"       },
        { id: 8,  name: "Quarto Standard 202",  guests: 1, status: "RESERVADO"  },
        { id: 9,  name: "Suite Master 203",     guests: 2, status: "VAGO"       },
        { id: 10, name: "Suite Presidencial",   guests: 4, status: "VAGO"       },
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
                <div className="grid grid-cols-5 gap-4">
                    {rooms.map((room) => (
                        <CardRoom key={room.id} room={room} />
                    ))}
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
                <h1>Lista de reservas vai aqui...</h1>
            </Card>

        </main>
    );
}

export default Dashboard;
