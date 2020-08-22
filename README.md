# github 등록
1. github.com 래퍼지토리(프로젝트) 생성
2. gitbash 인스톨
3. 터미널에 git config user.name, git config user.email 확인(로컬 사용자 계정이 맞는지 확인)
## 틀리다면 git config --global user.name "이름", git config --global user.email "이메일"로 수정 / 등록
4. 터미널에서 git init 명령어(github 초기화)
5. gitignore.io로 가서 사용중인 에디터, 사용중인 라이브러리 혹은 프레임워크 검사 후 제회할 파일 생성 -> .gitignore파일 생성 후 붙여넣기(github에 업로드에서 제외할 파일 or 폴더 정리)
6. git remote add 주소 명령어 (새로만든 래파지토리와 프로젝트소스 연결)
7. vocode 툴을 이용해서 changes -> 스테이징 처리 (+버튼 / 전체스테이징 or 파일별 스테이징)
8. 커밋(메세지)를 작성 -> 체크버튼 클릭(커밋 완료)
## 깃허브 로그인이 되어있지 않다면 로그인
9. 더보기 버튼 클릭 -> push(최종적으로 업로드 완료)

# github 재 등록
1. 커밋(메세지)를 작성
2. 스테이징처리(+버튼)
3. git pull. git pull --rebase
## git pull : 내가 수정한 코드/ 수정하지 않은 코드 상관럾이 정부 땡겨옴(다운로드)
## git pull(rebase) : 내가 수정한 코드를 제외하고 수정하지 않은 코드들 중에서 바뀐부분만 전부 떙겨옴(다운로드)
4. push 업로드 완료

123