import { atom } from 'jotai';

//save to local instead ram
//import { atomWithStorage } from 'jotai/utils';

// Sekarang data ini akan otomatis tersimpan di browser user
//export const cartAtom = atomWithStorage<any[]>('cart-v-gamers', []);

// Kita buat "kotak" bernama cartAtom yang bermula dengan array kosong []
export const cartAtom = atom<any[]>([]);