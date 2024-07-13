import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  handleOpenGuestsInput: () => void
  handleCloseGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  handleOpenGuestsInput,
  handleCloseGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-2 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando"
          disabled={isGuestsInputOpen}
          className="w-36 bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <button
          onClick={handleCloseGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={handleOpenGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
