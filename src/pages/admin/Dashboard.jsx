import Card from "../../components/Card";
import { FaCircle } from "react-icons/fa";

const Dashboard = () => {
    return (
        <main className="p-8 bg-[#fcfaf8] flex flex-col gap-6">

            {/* CARD 1: Status dos Quartos */}
            <Card
                titulo="Status dos Quartos"
                // Aqui passamos a LEGENDA inteira como prop info
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
                // O link agora tem estilo de botão amarelo
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