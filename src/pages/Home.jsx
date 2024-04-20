import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className='home-container'>
			<div className='info text-danger'>
				当サイトは画面幅1000px以上推奨です。
			</div>
			<ul className='home-list'>
				<li><Link to="/TicTacToe">TicTacToe</Link></li>
				<p className='page-info'>
					React公式のチュートリアル「TicTacToe」を実装したものです。<br />
				</p>
				<li><Link to="/CollectDaruma">だるまあつめ</Link></li>
				<p className='page-info'>
					ボードゲーム「だるまあつめ」を実装したものです。<br />
					初期の設計では本家のいくつかの機能を実装しない予定でしたが、結果的に全ての機能が実装できました。<br />
					しかし、ステート数が多くなり、管理や値の受け渡しが複雑になったため、現在オブジェクトを用いて関連するステートをまとめて管理するように変更中です。<br />
					将来的にはCPU対戦、オンライン対戦を実装予定です。<br />
				</p>
			</ul>
		
		
		</div>
	)
}

export default Home
