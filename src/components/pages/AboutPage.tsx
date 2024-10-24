import { Box, Typography } from "@mui/material";
import React from "react";
import GenericTemplate from "../templates/Layout";

const AboutPage: React.FC = () => {
    return (
        <GenericTemplate title="サイトについて">
            <Box component="main">
                <Typography variant="h3">サイトについて</Typography>
                    <Typography variant="body1">当サイトは、2ちゃんねるまとめブログのアンテナサイトです。</Typography>
                <Typography variant="h3">免責事項</Typography>
                    <Typography variant="body1">当サイト、またはリンク先のサイトを利用したことにより、何らかの不都合や損害が発生したとしても、当方は何らの責任を負うものではありません。</Typography>
                    <Typography variant="body1">サイト内に転載されている画像等の著作権は各権利所有者に帰属します。</Typography>
                    <Typography variant="body1">記事の削除依頼は掲載されているブログ様へ直接ご連絡ください。</Typography>
                <Typography variant="h3">個人情報</Typography>
                    <Typography variant="body1">当サイトの入力フォームにて入力された個人情報は、何らかの理由で連絡をとる必要が生じた場合にのみ使用し、法令等に定められた以外に個人情報を事前の同意なく第三者に提供することはありません。</Typography>
                <Typography variant="h3">プライバシーポリシー</Typography>
                    <Typography variant="h4">Cookieの利用について</Typography>
                        <Typography variant="body1">Cookieは、当サイトや他サイトへのアクセスに関する情報が含まれており、多くのサイトで利用者に有益な機能を提供する目的で使用されています。Cookieには、サイト利用者の個人情報（氏名、住所、メールアドレス、電話番号）は一切含まれません。</Typography>
                        <Typography variant="body1">当サイトは、第三者配信事業者がCookieを使用して、サイト利用者が当サイトや他のサイトに過去にアクセスした際の情報に基づいて広告を配信します。</Typography>
                        <Typography variant="body1">Googleが広告Cookieを使用することにより、サイト利用者が当サイトや他のサイトにアクセスした際の情報に基づいて、Googleやそのパートナーは適切な広告をサイト利用者に対して表示します。</Typography>
                        <Typography variant="body1">広告設定でパーソナライズ広告を無効にすることができます。</Typography>
                    <Typography variant="h4">アクセス解析ツールについて</Typography>
                        <Typography variant="body1">当サイトでは、アクセス解析ツール「Google Analytics」を利用しています。「Google Analytics」はトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</Typography>
                        <Typography variant="body1">この機能はCookieを無効にすることで収集を拒否することができますので、ご利用のブラウザ設定をご確認のうえ、拒否設定を行ってください。</Typography>

            </Box>
        </GenericTemplate>
    );
};

export default AboutPage;