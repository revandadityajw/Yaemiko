let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *RPG Menu* 』
┃ ⬡ .bank
┃ ⬡ .nabung
┃ ⬡ .tarik
┃ ⬡ .petualang
┃ ⬡ .korupsi
┃ ⬡ .berburu
┃ ⬡ .berdagang
┃ ⬡ .berkebun
┃ ⬡ .judi
┃ ⬡ .hadiah
┃ ⬡ .bangun
┃ ⬡ .upgrade
┃ ⬡ .casino
┃ ⬡ .chop
┃ ⬡ .chopig
┃ ⬡ .collect
┃ ⬡ .masak
┃ ⬡ .cd
┃ ⬡ .cooldown
┃ ⬡ .craft
┃ ⬡ .harian
┃ ⬡ .duel
┃ ⬡ .makan
┃ ⬡ .feed
┃ ⬡ .fightcentaur
┃ ⬡ .fightgriffin
┃ ⬡ .fightkyubi
┃ ⬡ .fightnaga
┃ ⬡ .fightphonix
┃ ⬡ .gajian
┃ ⬡ .heal
┃ ⬡ .inv
┃ ⬡ .kandang
┃ ⬡ .Karung
┃ ⬡ .kerja
┃ ⬡ .work
┃ ⬡ .putarkoin
┃ ⬡ .kolam
┃ ⬡ .leaderboard
┃ ⬡ .maling
┃ ⬡ .mancing
┃ ⬡ .transfer
┃ ⬡ .meracik
┃ ⬡ .merampok
┃ ⬡ .mission
┃ ⬡ .bulanan
┃ ⬡ .mulung
┃ ⬡ .nambang
┃ ⬡ .nebang
┃ ⬡ .ngewe
┃ ⬡ .ngewe
┃ ⬡ .ngocok
┃ ⬡ .nguli
┃ ⬡ .sawer
┃ ⬡ .opencrate
┃ ⬡ .open
┃ ⬡ .gacha
┃ ⬡ .pasar
┃ ⬡ .ngelont
┃ ⬡ .petshop
┃ ⬡ .cat
┃ ⬡ .dog
┃ ⬡ .fox
┃ ⬡ .horse
┃ ⬡ .feed
┃ ⬡ .petfood
┃ ⬡ .expoint
┃ ⬡ .premgift <kode>
┃ ⬡ .ramuan
┃ ⬡ .repair
┃ ⬡ .roket
┃ ⬡ .beli
┃ ⬡ .jual
┃ ⬡ .tokoikan
┃ ⬡ .shop
┃ ⬡ .pilihskill
┃ ⬡ .grab
┃ ⬡ .toko <sell | buy | upgrade | repair> <args>
┃ ⬡ .toko <sell | buy | upgrade | repair> <args>
┃ ⬡ .tomoney
┃ ⬡ .transfer [type] [jumlah] [@tag]
┃ ⬡ .tf [type] [jumlah] [@tag]
┃ ⬡ .upgrade
┃ ⬡ .mingguan
┃ ⬡ .petualang
┃ ⬡ .work
╚━━━━━━━━━━━━✧
 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['rpgmenu']
handler.tags = ['main']
handler.command = /^(rpgmenu)$/i

export default handler