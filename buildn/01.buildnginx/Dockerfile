# 베이스 이미지 지정
FROM nginx:1.23

# 지정한 파일로 index.html 덮어쓰기
COPY index.html /usr/share/nginx/html/index.html

# nginx 웹서버 실행
CMD ["nginx", "-g", "daemon off;"]
