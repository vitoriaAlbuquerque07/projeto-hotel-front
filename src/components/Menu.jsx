import { useState } from "react";
import { NavLink } from "react-router";

import { 
    LuLayoutDashboard, 
    LuBed, 
    LuUsers, 
    LuCalendarDays, 
    LuCreditCard, 
    LuUserCog, 
    LuChevronLeft, 
    LuChevronRight, 
    LuBuilding 
} from "react-icons/lu";

const Menu = () => {
    // Controla o menu
    const [isOpen, setIsOpen] = useState(true);

    // 🚀 SIMULANDO O BANCO DE DADOS (Dados do usuário logado)
    const usuarioLogado = {
        nome: "Ana Costa",
        cargo: "Gerente",
        avatar: null // Se vier null
    };

    const getIniciais = (nome) => {
        return nome.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    };

    const linksNav = [
        { to: "/admin", icon: <LuLayoutDashboard size={20} />, label: "Dashboard" },
        { to: "/admin/quartos", icon: <LuBed size={20} />, label: "Quartos" },
        { to: "/admin/clientes", icon: <LuUsers size={20} />, label: "Clientes" },
        { to: "/admin/reservas", icon: <LuCalendarDays size={20} />, label: "Reservas" },
        { to: "/admin/pagamentos", icon: <LuCreditCard size={20} />, label: "Pagamentos" },
        { to: "/admin/funcionarios", icon: <LuUserCog size={20} />, label: "Funcionários" },
    ];

    return (
        <aside className={`bg-[#0b4263] text-white transition-all duration-300 relative flex flex-col h-screen ${isOpen ? 'w-64' : 'w-20'}`}>
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-20 bg-orange-500 text-white rounded-full p-1.5 shadow-md flex items-center justify-center hover:bg-orange-600 transition-colors z-10"
            >
                {isOpen ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>

            <div className="p-6 flex items-center gap-3 overflow-hidden border-b border-white/10">
                <div className="bg-orange-500 p-2 rounded-xl text-white flex-shrink-0">
                    <LuBuilding size={24} />
                </div>
                {isOpen && (
                    <div className="flex flex-col whitespace-nowrap">
                        <h1 className="font-bold text-lg leading-tight">Pousada</h1>
                        <span className="text-xs text-white/70">Sistema de Gestão</span>
                    </div>
                )}
            </div>

            {/* Navegação (Links) */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
                {linksNav.map((link) => (
                    <NavLink 
                        key={link.to} 
                        to={link.to}
                        end={link.to === "/admin"} 
                        className={({ isActive }) => 
                            `flex items-center gap-3 p-3 rounded-xl transition-colors ${
                                isActive 
                                ? 'bg-white/10 text-white font-medium' 
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        <span className="flex-shrink-0">{link.icon}</span>
                        {isOpen && <span className="whitespace-nowrap">{link.label}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* (Perfil do Usuário) */}
            <div className="p-4 border-t border-white/10 flex items-center gap-3 overflow-hidden hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {usuarioLogado.avatar ? (
                        <img src={usuarioLogado.avatar} alt="Perfil" className="w-full h-full rounded-full object-cover" />
                    ) : (
                        getIniciais(usuarioLogado.nome)
                    )}
                </div>
                
                {isOpen && (
                    <div className="flex flex-col whitespace-nowrap">
                        <span className="font-medium text-sm">{usuarioLogado.nome}</span>
                        <span className="text-xs text-white/70">{usuarioLogado.cargo}</span>
                    </div>
                )}
            </div>
            
        </aside>
    );
}

export default Menu;