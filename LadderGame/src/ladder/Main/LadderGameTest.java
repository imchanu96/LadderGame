package ladder.Main;

import java.util.Scanner;

import ladder.Ladder;
import ladder.Message;

public class LadderGameTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int numberOfUsers; // 플레이어 수
		int selectWinPlayer; // 당첨 수 정하기
		
		Scanner scan = new Scanner(System.in);

		Message message = new Message();
		message.startMessage(); 						// 게임 시작 메세지
		numberOfUsers = scan.nextInt();
		
		Ladder ladder = new Ladder(numberOfUsers); 		// 플레이할 인원수 입력 받기
		
		message.selectWinPlayerMessage(); 				// 당첨 인원 고르라는 메세지
		selectWinPlayer = scan.nextInt();
		if (numberOfUsers > selectWinPlayer	
				&& selectWinPlayer > 0) {				// 입력받은 인원수만큼 당첨 인원 저장
			ladder.selectWinPlayer(selectWinPlayer); 	
		}else {											// 잘못 입력하면 1로 고정
			System.out.println("잘못 입력하셔서 당첨인원은 1로 됩니다.");
			ladder.selectWinPlayer(1);
		}
		
		ladder.showLadder();

		scan.close();
	}
}