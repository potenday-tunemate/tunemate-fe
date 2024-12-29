#1단계: 빌드 단계
FROM node:20-alpine AS builder

# 1. 작업 디렉토리 설정
WORKDIR /app

# 2. yarn 사용 설정 (corepack 사용)
RUN corepack enable && corepack prepare yarn@stable --activate

# 3. package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 4. 의존성 설치 (경고 무시)
RUN yarn install --frozen-lockfile --ignore-engines --ignore-optional

# 5. 소스 코드 전체 복사
COPY . .

# 6. React 애플리케이션 빌드 (scripts.build: "react-scripts build")
RUN yarn build


# 2단계: 실행 단계
FROM node:20-alpine AS production

# 1. 작업 디렉토리 설정
WORKDIR /app

# 2. package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 3. 프로덕션 의존성만 설치
RUN yarn install --production --frozen-lockfile --ignore-engines

# 4. 빌드된 React 애플리케이션 복사
COPY --from=builder /app/build ./build

# 5. React 애플리케이션 서비스용 간단한 서버 추가
RUN yarn global add serve

# 6. PORT를 3001로 설정 (환경변수)
ENV PORT=3001

# 7. 컨테이너 실행 시 빌드 파일을 3001 포트로 서빙
CMD ["serve", "-s", "build", "-l", "3001"]

# 8. 컨테이너 포트 노출
EXPOSE 3001
