package ladderClone;

public class LadderLogic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		5인 기준으로 테스트 할 예정
		String[][] ladder = new String[10][10];

		String ladderJoint1 = "├"; // 사다리 이음새 1
		String ladderJoint2 = "┤"; // 사다리 이음새 2

		for (int i = 0; i < ladder.length; i++) {
			for (int j = 0; j < ladder.length; j++) {

				ladder[i][j] = "│";
				if (j % 2 != 0) {
					ladder[i][j] = "   ";
				}
			}
		}
		ladder[3][0] = "├";
		ladder[5][2] = "├";
		ladder[8][0] = "├";
		ladder[4][4] = "├";
		ladder[5][6] = "├";
		
		for (int i = 0; i < ladder.length; i++) {
			for (int j = 0; j < ladder[i].length; j++) {
				if (ladder[i][j].equals("├") && j % 2 == 0) {
					ladder[i][j + 1] = " ㅡ ";
					ladder[i][j + 2] = ladderJoint2;
				}
			}
		}

		for (int i = 0; i < ladder[0].length; i++) { // 사다리 사용자 표기
			if (i % 2 == 0) {
				ladder[0][i] = String.valueOf((i / 2) + 1);
			}
		}
		
//		ladder[9][0] = "★";
//		ladder[9][2] = "x";
//		ladder[9][4] = "★";
//		ladder[9][6] = "x";
//		ladder[9][8] = "x";
		
//		ladder[9][1] = "       ";
//		ladder[9][3] = "   ";
//		ladder[9][5] = "       ";
//		ladder[9][7] = "   ";
//		ladder[9][9] = "  ";
		
		ladder[9][0] = "1";
		ladder[9][2] = "2";
		ladder[9][4] = "3";
		ladder[9][6] = "4";
		ladder[9][8] = "5";
		
		ladder[9][1] = "   ";
		ladder[9][3] = "   ";
		ladder[9][5] = "   ";
		ladder[9][7] = "   ";
		ladder[9][9] = "   ";
		
		for (int i = 0; i < ladder.length; i++) {
			for (int j = 0; j < ladder.length; j++) {
				System.out.print(ladder[i][j]);
			}
			System.out.println("");
		} // 출력 끝

		for (int i = 0; i < ladder.length; i++) {
			int ladderlength = 0;
			int ladderjoint = 0;
			while (ladderlength == ladder.length) {
				if (ladder[ladderlength][ladderjoint].equals("├")) {

				}
				ladderlength++;
				ladderjoint++;
			}
		}


		// 결과값 출력하기
		for (int x = 0; x < ladder[0].length; x++) { //사다리 열만큼
			int transverseNum = 0;
			transverseNum = x;
			if (x % 2 == 0) { // 유저의 이름이나 숫자를 만났을때
			int lengthNum = 0;
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
				System.out.println(ladder[lengthNum][transverseNum]);
			}

		}// 첫번째 for문 종료

	}

}
