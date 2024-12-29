# 1단계: 빌드 단계
FROM node:18.8 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 매니저를 yarn으로 설정
RUN corepack enable && corepack prepare yarn@stable --activate

# package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 의존성 설치 (경고 무시)
RUN yarn install --frozen-lockfile --ignore-engines --ignore-optional

# 소스 코드 복사
COPY . .

# React 애플리케이션 빌드
RUN yarn build

# 2단계: 실행 단계
FROM node:18.8

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 프로덕션 의존성만 설치
RUN yarn install --production --frozen-lockfile --ignore-engines --ignore-optional

# 빌드된 React 애플리케이션 복사
COPY --from=builder /app/build ./build

# React 애플리케이션 서비스용 간단한 서버 추가
RUN yarn global add serve

# 컨테이너 실행 시 React 빌드 파일을 제공
CMD ["serve", "-s", "build", "-l", "3000"]

# 컨테이너 포트 노출
EXPOSE 3000