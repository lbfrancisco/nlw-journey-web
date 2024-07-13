import { AtSign, User, X } from 'lucide-react'
import type { FormEvent } from 'react'

interface ConfirmTripModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  handleCloseConfirmTripModal: () => void
}

export function ConfirmTripModal({
  createTrip,
  handleCloseConfirmTripModal,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-lg font-bold">Confirmar criação de viagem</p>
            <span className="text-sm text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <span className="font-semibold text-zinc-100">
                Florianópolis, Brasil
              </span>{' '}
              nas datas de{' '}
              <span className="font-semibold text-zinc-100">
                16 a 27 de Agosto de 2024
              </span>{' '}
              preencha seus dados abaixo:
            </span>
          </div>
          <button onClick={handleCloseConfirmTripModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>

        <form onSubmit={createTrip} className="flex flex-col gap-2">
          <div className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              placeholder="Seu nome completo"
              className="flex-1 bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              placeholder="Seu e-mail pessoal"
              className="flex-1 bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 p-4 font-medium text-lime-950 transition-colors hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  )
}
