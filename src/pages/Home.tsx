import { useState, useEffect } from "react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, GitBranch, Terminal, ChevronRight, ChevronLeft, Activity, Cpu, Code2, Briefcase, X } from "lucide-react";
import { SKILLS, EXPERIENCE, PROJECTS } from "@/data/portfolio";
import img from "../assets/yo.png";

const _projImages = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp,gif,svg}",
  { eager: true }
) as Record<string, { default: string }>;

function getProjectImages(folder: string): string[] {
  if (!folder) return [];
  return Object.entries(_projImages)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .map(([, mod]) => (mod as any).default as string);
}

function ProjectDetailPane({ project }: { project: typeof PROJECTS[0] }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const images = getProjectImages(project.folder ?? "");
  
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowRight' && images.length > 1) setImgIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft' && images.length > 1) setImgIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, images.length]);

  return (
    <>
      <div className="w-2/3 p-8 lg:px-12 lg:py-10 flex justify-center bg-[#030303] overflow-hidden">
        <div className="w-full max-w-2xl flex flex-col h-full justify-start">
          
          {/* Header */}
          <div className="shrink-0">
            <h2 className="text-3xl text-white font-semibold tracking-tight truncate">{project.name}</h2>
            <div className="text-blue-500 text-[10px] font-mono uppercase tracking-widest mb-3 mt-1 pb-3 border-b border-[#111]">{project.type}</div>
          </div>
          
          {/* Image Viewer (Center, Flexible) */}
          {images.length > 0 && (
            <div className="shrink min-h-0 flex flex-col gap-2 mt-1 mb-4">
              <div 
                className="w-full shrink min-h-0 max-h-[300px] xl:max-h-[380px] bg-[#050505] border border-[#1c1c1c] relative flex items-center justify-center p-2 group overflow-hidden cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              >
                 <img src={images[imgIdx]} alt={project.name} className="max-w-full max-h-full object-contain group-hover:opacity-80 transition-opacity" />
                 
                 {images.length > 1 && (
                   <>
                     <button 
                       onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + images.length) % images.length); }}
                       className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#000000dd] p-1.5 border border-[#222] text-white opacity-0 group-hover:opacity-100 transition-opacity hover:border-blue-500"
                     >
                       <ChevronLeft size={16} />
                     </button>
                     <button 
                       onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % images.length); }}
                       className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#000000dd] p-1.5 border border-[#222] text-white opacity-0 group-hover:opacity-100 transition-opacity hover:border-blue-500"
                     >
                       <ChevronRight size={16} />
                     </button>
                   </>
                 )}
              </div>
              {/* Dots / Status */}
              {images.length > 1 && (
                <div className="flex items-center justify-between px-1 shrink-0">
                  <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                    IMG {imgIdx + 1} // {images.length}
                  </div>
                  <div className="flex gap-1.5">
                    {images.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setImgIdx(i)}
                        className={`w-1.5 h-1.5 border transition-colors ${imgIdx === i ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-zinc-600 hover:border-zinc-400'}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Text Details (Bottom) */}
          <div className="shrink-0 mt-2">
            <p className="text-zinc-300 text-sm mb-5 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <h3 className="text-[9px] font-mono uppercase text-zinc-600 tracking-widest mb-3">Tech Stack</h3>
                <div className="flex flex-col gap-1.5">
                  {project.tech.slice(0, 4).map(t => (
                    <div key={t} className="flex items-center gap-3 text-xs text-zinc-400 truncate">
                      <div className="w-1 h-1 bg-zinc-800 shrink-0"></div> {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <h3 className="text-[9px] font-mono uppercase text-zinc-600 tracking-widest mb-3">Sources & Links</h3>
                <div className="flex flex-col gap-2.5">
                  {project.repos.map(r => (
                    <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-zinc-400 hover:text-blue-400 transition-colors w-fit group truncate max-w-full">
                      <GitBranch size={14} className="text-zinc-600 group-hover:text-blue-500 shrink-0" /> <span className="truncate">{r.label}</span>
                    </a>
                  ))}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors w-fit group mt-1 truncate max-w-full">
                      <ExternalLink size={14} className="text-zinc-600 group-hover:text-white shrink-0" /> <span className="truncate">Visitar sitio</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {isFullscreen && images.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000f2] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200 backdrop-blur-sm"
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={24} />
          </button>
          
          <img 
            src={images[imgIdx]} 
            alt={project.name} 
            className="max-w-full max-h-full object-contain border border-[#1c1c1c] shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + images.length) % images.length); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#050505] p-3 border border-[#222] text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % images.length); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#050505] p-3 border border-[#222] text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-[#050505] px-4 py-2 border border-[#222]">
                {imgIdx + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  const tabs = [
    { id: "experience", label: "Experience", icon: <Briefcase size={14} /> },
    { id: "projects", label: "Projects", icon: <Code2 size={14} /> },
    { id: "skills", label: "Stack", icon: <Cpu size={14} /> },
  ];

  return (
    <div className="h-screen w-screen bg-[#030303] text-[#a1a1aa] font-sans flex flex-col overflow-hidden">
      
      {/* Topbar (Contact Links) */}
      <header className="h-10 border-b border-[#1c1c1c] bg-[#080808] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-6">
          <a href="mailto:alex_180796@hotmail.com" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group">
            <Mail size={12} className="text-zinc-500 group-hover:text-blue-500 transition-colors" /> alex_180796
          </a>
          <a href="https://github.com/asanchezx96" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group">
            <Github size={12} className="text-zinc-500 group-hover:text-blue-500 transition-colors" /> asanchezx96
          </a>
          <a href="https://www.linkedin.com/in/asanchezx96/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group">
            <Linkedin size={12} className="text-zinc-500 group-hover:text-blue-500 transition-colors" /> asanchezx96
          </a>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hidden sm:flex">
          <MapPin size={12} className="text-zinc-600" /> Ciudad del Carmen, Campeche
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Fixed Width) */}
        <aside className="w-64 xl:w-72 border-r border-[#1c1c1c] bg-[#050505] flex flex-col shrink-0 overflow-hidden">
          {/* Profile */}
          <div className="border-b border-[#1c1c1c] flex flex-col shrink-0">
            <div className="w-full aspect-[4/3] overflow-hidden border-b border-[#1c1c1c]">
              <img src={img} alt="Alexis R. Sánchez" className="w-full h-full object-cover object-[center_30%]" />
            </div>
            <div className="p-6">
              <h1 className="text-zinc-100 font-semibold text-base tracking-wide uppercase">Alexis Sánchez</h1>
              <h2 className="text-blue-500 text-[10px] font-mono uppercase tracking-widest mt-1">Senior SWE</h2>
            </div>
          </div>
          
          {/* Overview Info */}
          <div className="p-6 flex flex-col flex-1 min-h-0">
            <div className="flex flex-col gap-3">
              <h3 className="text-zinc-200 text-xs font-medium leading-relaxed">
                Desarrollador <span className="text-blue-500">full-stack</span> con visión de producto. Arquitecturas escalables y código limpio.
              </h3>
              <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-4">
                Desarrollo software desde pequeños proyectos hasta sistemas empresariales. Me especializo en aplicaciones web full-stack y móviles híbridas.
              </p>
            </div>

            <div className="flex items-center justify-between pt-5 mt-auto border-t border-[#111] shrink-0">
              <div>
                <div className="text-white font-mono text-lg">6+</div>
                <div className="text-[8px] text-zinc-600 uppercase tracking-widest mt-1">Años Exp.</div>
              </div>
              <div>
                <div className="text-white font-mono text-lg">8+</div>
                <div className="text-[8px] text-zinc-600 uppercase tracking-widest mt-1">Empresas</div>
              </div>
              <div>
                <div className="text-white font-mono text-lg">10+</div>
                <div className="text-[8px] text-zinc-600 uppercase tracking-widest mt-1">Techs</div>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#030303]">
          
          {/* Horizontal Tabs */}
          <nav className="h-12 border-b border-[#1c1c1c] bg-[#050505] flex items-center shrink-0 px-4">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 h-full px-6 text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative ${
                    isActive 
                      ? 'text-white' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className={isActive ? 'text-blue-500' : 'text-zinc-700'}>{tab.icon}</span>
                  {tab.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="h-full flex flex-col justify-start pt-12 md:pt-16 px-12 md:px-16 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 w-full max-w-6xl">
                {EXPERIENCE.map((e, index) => (
                  <div key={e.id} className="relative flex flex-col border-l border-[#222] pl-5">
                    {/* Tiny active marker for most recent */}
                    {index === 0 && (
                      <div className="absolute -left-[2px] top-0 w-[3px] h-4 bg-blue-500"></div>
                    )}
                    <span className="text-blue-500 text-[10px] font-mono tracking-widest uppercase mb-1.5">{e.date}</span>
                    <h3 className="text-white text-base font-semibold truncate" title={e.company}>{e.company}</h3>
                    <h4 className="text-zinc-500 text-sm mb-3 truncate">{e.role}</h4>
                    
                    <div className="flex flex-col gap-1.5 mb-4 flex-1">
                      {e.activities.slice(0, 2).map((a, i) => (
                         <div key={i} className="text-zinc-400 text-xs leading-snug flex gap-2 line-clamp-2">
                           <ChevronRight size={14} className="text-zinc-700 shrink-0 mt-[2px]" /> 
                           <span className="truncate whitespace-normal line-clamp-2">{a}</span>
                         </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {e.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 bg-[#0a0a0a] border border-[#1a1a1a] px-2 py-0.5">{t}</span>
                      ))}
                      {e.tech.length > 4 && (
                        <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 bg-[#050505] border border-[#111] px-2 py-0.5">+{e.tech.length - 4}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS (Master-Detail) */}
          {activeTab === "projects" && (
            <div className="flex h-full w-full overflow-hidden">
              {/* Project List */}
              <div className="w-1/3 border-r border-[#1c1c1c] bg-[#050505] flex flex-col shrink-0 overflow-y-auto no-scrollbar">
                {PROJECTS.map(p => (
                  <button 
                    key={p.id} 
                    onClick={() => setActiveProject(p)}
                    className={`w-full text-left px-6 py-5 shrink-0 flex flex-col justify-center relative group border-b border-[#111] last:border-b-0 ${
                      activeProject.id === p.id 
                        ? 'bg-[#0f0f0f]' 
                        : 'hover:bg-[#0a0a0a]'
                    }`}
                  >
                    {activeProject.id === p.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                    )}
                    <span className={`text-sm font-semibold truncate w-full ${activeProject.id === p.id ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>{p.name}</span>
                    <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest truncate w-full mt-0.5">{p.type}</span>
                  </button>
                ))}
              </div>
              {/* Project Detail */}
              <ProjectDetailPane key={activeProject.id} project={activeProject} />
            </div>
          )}

          {/* STACK / SKILLS */}
          {activeTab === "skills" && (
            <div className="h-full flex flex-col justify-start pt-12 md:pt-16 px-12 lg:px-20 overflow-hidden bg-[#030303]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 max-w-7xl w-full">
                {SKILLS.map(s => (
                  <div key={s.label} className="flex flex-col overflow-hidden">
                    <h3 className="text-blue-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#111]">{s.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map(i => (
                        <div key={i} className="text-zinc-400 text-xs bg-[#080808] border border-[#1a1a1a] px-2.5 py-1 hover:text-white hover:border-[#333] transition-colors cursor-default">
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
