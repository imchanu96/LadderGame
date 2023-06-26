package ladder;
import java.util.Scanner;

public class Ladder {

	String[][] ladder; // 사다리
	String ladderJoint1 = "├"; // 사다리 이음새 1
	String ladderJoint2 = "┤"; // 사다리 이음새 2
	int randomNum = 0;
	int ladderPositionArr[];
	String[] numberOfUsersArr; // 사용자 이름값

	Scanner scan = new Scanner(System.in);

	Ladder() {

	}

	public Ladder(int numberOfUsers) { // 사다리의 길이 10 고정, 인원수 만큼 생성
		super();
		this.ladder = new String[10][numberOfUsers * 2];
		for (int i = 0; i < ladder.length; i++) {
			for (int j = 0; j < ladder[i].length; j++) {
				if (j == 0 || j % 2 == 0) {
					ladder[i][j] = "│";
				} else {
					if (j == numberOfUsers * 2 - 1) {
						ladder[i][j] = "\t";
					} else {
						ladder[i][j] = " ";
					}
				}

			}
		}

		// 사다리 이어주는 부분 갯수 랜덤으로 정하기
		randomNum = (int) (Math.random() * 3) + 3;
		// 사다리의 이음새 부분 위치
		// 0, 마지막 자리와 그 전 자리는 이음새가 없어야됨
		ladderPositionArr = new int[ladder.length - 2];
		for (int i = 0; i < ladderPositionArr.length; i++) {
			ladderPositionArr[i] = i + 1;
		}
	}

	private void ladderConfiguration(int randomNum) { // 사다리 이음새 부분 배치
		int suffleNum = 0;
		// 사다리 길이 만큼에서 무작위 위치에 이음새 배치
		for (int i = 0; i < randomNum; i++) {
			for (int j = 0; j < ladder[i].length; j++) {
				suffleNum = (int) (Math.random() * (ladderPositionArr.length));

				if (j % 2 == 0 && j < ladder[i].length) {
					ladder[suffleNum][j] = ladderJoint1;
				}
			}
		}
	}

	private void showOrNotShow() { // 사다리에 이름을 표시할지 말지 정하는 메소드
		System.out.println("이름을 사다리에 표시 하겠습니까?");

		System.out.println("1번 : Yes \t 2번 : No");
		String choose;
		choose = scan.nextLine();

		if (choose.equals("1") || choose.equals("1번") || choose.equals("1번 Yes") || choose.equals("YES")
				|| choose.equals("yes") || choose.equals("Yes") 
				|| choose.equals("1번 : Yes") || choose.equals("1번 : YES")) { // 사다리 첫번째 라인에 이름 표현
			
			ladderUsers(ladder[0].length / 2); // 사용자의 이름을 저장하는 메서드
			
			for (int i = 0; i < numberOfUserArr.length * 2; i++) {
				if (i % 2 == 0) {
					ladder[0][i] = numberOfUserArr[i / 2];
				}else if (i == 5) {
					ladder[0][i] = "  ";
				}else {
					ladder[0][i] = "   ";
				}
			}
		} else if (choose.equals("2") || choose.equals("2번") 
				|| choose.equals("2번 No") || choose.equals("NO")
				|| choose.equals("no") || choose.equals("No") 
				|| choose.equals("2번 : No") || choose.equals("2번 : NO")) { // 사다리 첫번째 라인에 이름 표현 X, 숫자로표현
																															
			for (int i = 0; i < ladder[0].length; i++) {
				if (i % 2 == 0) {
					ladder[0][i] = String.valueOf(((i + 1) / 2) + 1);
				} else {
					ladder[0][i] = " ";
				}
			}
		} else {
			System.out.println("보기중에 없어 플레이어는 숫자로 표기됩니다.");
			for (int i = 0; i < ladder[0].length; i++) {
				if (i % 2 == 0) {
					ladder[0][i] = String.valueOf(((i + 1) / 2) + 1);
				} else {
					ladder[0][i] = " ";
				}
			}
		}
	}
	
	private void ladderUsers(int numberOfUsers) { // 사다리 첫번째 라인에 이름 넣기
		numberOfUserArr = new String[numberOfUsers];

		System.out.println("-----------------------------------------");
		System.out.println("|사다리에 표시할 경우 사다리가 틀어 질 수도 있습니다,	|");
		System.out.println("|표현을 원하시면 3글자 미만으로 입력 부탁드립니다.	|");
		System.out.println("-----------------------------------------");
		for (int i = 0; i < numberOfUserArr.length; i++) {
			System.out.println((i + 1) + "번째 사람을 입력해주세요.");
			numberOfUserArr[i] = scan.nextLine();
		}

	}

	public void selectWinPlayer(int selectWinPlayer) { // 사다리의 마지막 부분 표시
		String[] selectWinPlayerArr = new String[ladder[0].length / 2];
		for (int i = 0; i < selectWinPlayerArr.length; i++) {
			selectWinPlayerArr[i] = "x";
		}

		for (int i = 0; i < selectWinPlayer; i++) {
			selectWinPlayerArr[i] = "✯    ";
		}
		int suffleNum = 0;
		String tempStr = "";
		
		for (int i = 0; i < selectWinPlayerArr.length; i++) {// 당첨 섞기
			suffleNum = (int) (Math.random() * selectWinPlayerArr.length);

			tempStr = selectWinPlayerArr[i];
			selectWinPlayerArr[i] = selectWinPlayerArr[suffleNum];
			selectWinPlayerArr[suffleNum] = tempStr;
		}
//		for (int i = 0; i < selectWinPlayerArr.length; i++) { // 확인용
//			System.out.println(selectWinPlayerArr[i]);
//		}

		for (int i = 0; i < ladder[0].length; i++) { // 사다리 마지막 부분에 저장
				if (i % 2 == 0) {
					ladder[ladder.length - 1][i] = selectWinPlayerArr[i / 2];
				}else if (i % 2 != 0) { // 당첨여부 라인 공백 맞추기용
					ladder[ladder.length - 1][i] = " ";
				}else {
					ladder[ladder.length - 1][i] = "";
				}
		} // 마지막 저장 끝
	}
	
	
	private void ladderLogic() {
		// 결과값 출력하기
		System.out.println("\n");
		System.out.println("=========결과 발표 =========");
		for (int x = 0; x < ladder[0].length; x++) { // 사다리 열만큼
			int transverseNum = 0;  // 사다리 열 인덱스 값
			transverseNum = x;
			if (x % 2 == 0) { // 유저의 이름이나 숫자를 만났을때
				int lengthNum = 0;	// 사다리 행 인덱스 값
				System.out.print("|");
				System.out.print(ladder[0][transverseNum]);
				System.out.print(" = ");
				for (int y = 0; y < ladder.length; y++) { // 사다리(행) 길이 만큼
					lengthNum = y;
					if (ladder[lengthNum][transverseNum].equals("├")) { // "├" 을 만나면 열이 2 증가
						transverseNum = transverseNum + 2;
					}else if (ladder[lengthNum][transverseNum].equals("┤")) { // "┤"을 만나면 열이 2 감소
						transverseNum = transverseNum - 2;
					}
					// ("├" or "┤")을 만나거나 만나지 않아도 행이 증가한다.
				} // 두번째 for문 종료
					System.out.print(ladder[lengthNum][transverseNum]);
					System.out.println("\t\t\t|");
			}

		}// 첫번째 for문 종료
		System.out.println("============^============");
	}

	public void showLadder() {
		ladderConfiguration(randomNum); // 무작위 위치에 이음새가 배치된 사다리 호출

		for (int i = 0; i < ladder.length - 1; i++) { // 사다리의 주축이 될 부분 "│"를 인덱스에 저장
			ladder[i][ladder[i].length - 2] = "│";
		}

		// 사다리에서 "├"인 인덱스이고 배열의 열이 2의 배수이면 ├ ㅡ ┤가 될수 있게 인덱스의 값을 할당
		for (int i = 0; i < ladder.length; i++) {
			for (int j = 0; j < ladder[i].length; j++) {
				if (ladder[i][j].equals("├") && j % 2 == 0) {
					ladder[i][j + 1] = "ㅡ";
					ladder[i][j + 2] = ladderJoint2;
				}
			}
		}
	

		showOrNotShow(); // 사다리 처음 부분에 이름 출력 여부 메서드

		for (int i = 0; i < ladder.length; i++) { // 사다리 출력
			for (int j = 0; j < ladder[i].length; j++) {
				System.out.print(ladder[i][j] + " ");
			}
			System.out.println();
		}
		
		ladderLogic(); //사다리의 결과값 출력
	}

}
