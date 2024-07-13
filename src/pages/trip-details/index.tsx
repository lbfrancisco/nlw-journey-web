import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
} from 'lucide-react'

export function TripDetails() {
  return (
    <div className="m-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="w-36 bg-transparent placeholder-zinc-400 outline-none">
              17 a 23 de Agosto
            </span>
          </div>
          <div className="h-6 w-px bg-zinc-800"></div>
          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>
      <main className="flex items-start gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              {/** Colocar opacity-60 quando o dia já passou */}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-50">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-50">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                  </div>
                  <span className="text-sm text-zinc-400">08:00h</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleDashed className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">Café da manhã</span>
                  </div>
                  <span className="text-sm text-zinc-400">09:00h</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-50">
                  Dia 19
                </span>
                <span className="text-xs text-zinc-500">Segunda-feira</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                  </div>
                  <span className="text-sm text-zinc-400">08:00h</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleDashed className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">Café da manhã</span>
                  </div>
                  <span className="text-sm text-zinc-400">09:00h</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-50">
                  Dia 20
                </span>
                <span className="text-xs text-zinc-500">Terça-feira</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                  </div>
                  <span className="text-sm text-zinc-400">08:00h</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <div className="flex items-center gap-2">
                    <CircleDashed className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">Café da manhã</span>
                  </div>
                  <span className="text-sm text-zinc-400">09:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/10470001139028321098312093821903812038910
                  </a>
                </div>

                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Regras da casa
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.notion.com/pages/60020273467111111111111111111111111
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>
          <div className="h-px w-full bg-zinc-800"></div>
          <div></div>
        </div>
      </main>
    </div>
  )
}
