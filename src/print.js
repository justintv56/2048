import React from 'react'

export default function print({board}) {
    return (
    <div class="grid-container">
        <div class="grid-item1">{board[0][0]}</div>
        <div class="grid-item2">{board[0][1]}</div>
        <div class="grid-item3">{board[0][2]}</div>
        <div class="grid-item4">{board[0][3]}</div>
        <div class="grid-item5">{board[1][0]}</div>
        <div class="grid-item6">{board[1][1]}</div>
        <div class="grid-item7">{board[1][2]}</div>
        <div class="grid-item8">{board[1][3]}</div>
        <div class="grid-item9">{board[2][0]}</div>
        <div class="grid-item10">{board[2][1]}</div>
        <div class="grid-item11">{board[2][2]}</div>
        <div class="grid-item12">{board[2][3]}</div>
        <div class="grid-item13">{board[3][0]}</div>
        <div class="grid-item14">{board[3][1]}</div>
        <div class="grid-item15">{board[3][2]}</div>
        <div class="grid-item16">{board[3][3]}</div>
    </div>
    )
}
