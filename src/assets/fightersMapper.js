// import all images and audios

// Liu Kang
import liu_kang_face from '@/assets/images/fighters/liu_kang/face.webp';
import liu_kang_standby from '@/assets/images/fighters/liu_kang/standby.webp';
import liu_kang_defeat from '@/assets/images/fighters/liu_kang/defeat.webp';
import liu_kang_walking from '@/assets/images/fighters/liu_kang/walking.webp';
import liu_kang_selected from '@/audio/shaokahn/names/liu_kang.mp3';

// Kung Lao
import kung_lao_face from '@/assets/images/fighters/kung_lao/face.webp';
import kung_lao_standby from '@/assets/images/fighters/kung_lao/standby.webp';
import kung_lao_defeat from '@/assets/images/fighters/kung_lao/defeat.webp';
import kung_lao_walking from '@/assets/images/fighters/kung_lao/walking.webp';
import kung_lao_selected from '@/audio/shaokahn/names/kung_lao.mp3';

// Cage
import cage_face from '@/assets/images/fighters/cage/face.webp';
import cage_standby from '@/assets/images/fighters/cage/standby.webp';
import cage_defeat from '@/assets/images/fighters/cage/defeat.webp';
import cage_walking from '@/assets/images/fighters/cage/walking.webp';
import cage_selected from '@/audio/shaokahn/names/cage.mp3';

// Reptile
import reptile_face from '@/assets/images/fighters/reptile/face.webp';
import reptile_standby from '@/assets/images/fighters/reptile/standby.webp';
import reptile_defeat from '@/assets/images/fighters/reptile/defeat.webp';
import reptile_walking from '@/assets/images/fighters/reptile/walking.webp';
import reptile_selected from '@/audio/shaokahn/names/reptile.mp3';

// Sub Zero
import sub_zero_face from '@/assets/images/fighters/sub_zero/face.webp';
import sub_zero_standby from '@/assets/images/fighters/sub_zero/standby.webp';
import sub_zero_defeat from '@/assets/images/fighters/sub_zero/defeat.webp';
import sub_zero_walking from '@/assets/images/fighters/sub_zero/walking.webp';
import sub_zero_selected from '@/audio/shaokahn/names/sub_zero.mp3';

// Shang Tsung
import shang_tsung_face from '@/assets/images/fighters/shang_tsung/face.webp';
import shang_tsung_standby from '@/assets/images/fighters/shang_tsung/standby.webp';
import shang_tsung_defeat from '@/assets/images/fighters/shang_tsung/defeat.webp';
import shang_tsung_walking from '@/assets/images/fighters/shang_tsung/walking.webp';
import shang_tsung_selected from '@/audio/shaokahn/names/shang_tsung.mp3';

// Kitana
import kitana_face from '@/assets/images/fighters/kitana/face.webp';
import kitana_standby from '@/assets/images/fighters/kitana/standby.webp';
import kitana_defeat from '@/assets/images/fighters/kitana/defeat.webp';
import kitana_walking from '@/assets/images/fighters/kitana/walking.webp';
import kitana_selected from '@/audio/shaokahn/names/kitana.mp3';

// Jax
import jax_face from '@/assets/images/fighters/jax/face.webp';
import jax_standby from '@/assets/images/fighters/jax/standby.webp';
import jax_defeat from '@/assets/images/fighters/jax/defeat.webp';
import jax_walking from '@/assets/images/fighters/jax/walking.webp';
import jax_selected from '@/audio/shaokahn/names/jax.mp3';

// Mileena
import mileena_face from '@/assets/images/fighters/mileena/face.webp';
import mileena_standby from '@/assets/images/fighters/mileena/standby.webp';
import mileena_defeat from '@/assets/images/fighters/mileena/defeat.webp';
import mileena_walking from '@/assets/images/fighters/mileena/walking.webp';
import mileena_selected from '@/audio/shaokahn/names/mileena.mp3';

// Baraka
import baraka_face from '@/assets/images/fighters/baraka/face.webp';
import baraka_standby from '@/assets/images/fighters/baraka/standby.webp';
import baraka_defeat from '@/assets/images/fighters/baraka/defeat.webp';
import baraka_walking from '@/assets/images/fighters/baraka/walking.webp';
import baraka_selected from '@/audio/shaokahn/names/baraka.mp3';

// Scorpion
import scorpion_face from '@/assets/images/fighters/scorpion/face.webp';
import scorpion_standby from '@/assets/images/fighters/scorpion/standby.webp';
import scorpion_defeat from '@/assets/images/fighters/scorpion/defeat.webp';
import scorpion_walking from '@/assets/images/fighters/scorpion/walking.webp';
import scorpion_selected from '@/audio/shaokahn/names/scorpion.mp3';

// Raiden
import raiden_face from '@/assets/images/fighters/raiden/face.webp';
import raiden_standby from '@/assets/images/fighters/raiden/standby.webp';
import raiden_defeat from '@/assets/images/fighters/raiden/defeat.webp';
import raiden_walking from '@/assets/images/fighters/raiden/walking.webp';
import raiden_selected from '@/audio/shaokahn/names/raiden.mp3';

const fighters = [
    // ROW 1
    {
        key: 'liu_kang',
        name: 'Liu Kang',
        images: {
            face: liu_kang_face,
            standby: liu_kang_standby,
            defeat: liu_kang_defeat,
            walking: liu_kang_walking,
        },
        audios: {
            selected: liu_kang_selected
        },
        active: true
    },
    {
        key: 'kung_lao',
        name: 'Kung Lao',
        images: {
            face: kung_lao_face,
            standby: kung_lao_standby,
            defeat: kung_lao_defeat,
            walking: kung_lao_walking,
        },
        audios: {
            selected: kung_lao_selected
        },
        active: true
    },
    {
        key: 'cage',
        name: 'Jhonny Cage',
        images: {
            face: cage_face,
            standby: cage_standby,
            defeat: cage_defeat,
            walking: cage_walking,
        },
        audios: {
            selected: cage_selected
        },
        active: true
    },
    {
        key: 'reptile',
        name: 'Reptile',
        images: {
            face: reptile_face,
            standby: reptile_standby,
            defeat: reptile_defeat,
            walking: reptile_walking,
        },
        audios: {
            selected: reptile_selected
        },
        active: true
    },
    
    // ROW 2
    {
        key: 'sub_zero',
        name: 'Sub Zero',
        images: {
            face: sub_zero_face,
            standby: sub_zero_standby,
            defeat: sub_zero_defeat,
            walking: sub_zero_walking,
        },
        audios: {
            selected: sub_zero_selected
        },
        active: true
    },
    {
        key: 'shang_tsung',
        name: 'Shang Tsung',
        images: {
            face: shang_tsung_face,
            standby: shang_tsung_standby,
            defeat: shang_tsung_defeat,
            walking: shang_tsung_walking,
        },
        audios: {
            selected: shang_tsung_selected
        },
        active: true
    },
    {
        key: 'kitana',
        name: 'Kitana',
        images: {
            face: kitana_face,
            standby: kitana_standby,
            defeat: kitana_defeat,
            walking: kitana_walking,
        },
        audios: {
            selected: kitana_selected
        },
        active: true
    },
    {
        key: 'jax',
        name: 'Jax',
        images: {
            face: jax_face,
            standby: jax_standby,
            defeat: jax_defeat,
            walking: jax_walking,
        },
        audios: {
            selected: jax_selected
        },
        active: true
    },

    // ROW 3
    {
        key: 'mileena',
        name: 'Mileena',
        images: {
            face: mileena_face,
            standby: mileena_standby,
            defeat: mileena_defeat,
            walking: mileena_walking,
        },
        audios: {
            selected: mileena_selected 
        },
        active: true
    },
    {
        key: 'baraka',
        name: 'Baraka',
        images: {
            face: baraka_face,
            standby: baraka_standby,
            defeat: baraka_defeat,
            walking: baraka_walking,
        },
        audios: {
            selected: baraka_selected
        },
        active: true
    },
    {
        key: 'scorpion',
        name: 'Scorpion',
        images: {
            face: scorpion_face,
            standby: scorpion_standby,
            defeat: scorpion_defeat,
            walking: scorpion_walking,
        },
        audios: {
            selected: scorpion_selected
        },
        active: true
    },
    {
        key: 'raiden',
        name: 'Raiden',
        images: {
            face: raiden_face,
            standby: raiden_standby,
            defeat: raiden_defeat,
            walking: raiden_walking,
        },
        audios: {
            selected: raiden_selected
        },
        active: true
    },
]

export default fighters